import { ThrowStmt } from '@angular/compiler';
import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Group, GroupRequest } from '../group.model';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  form!: FormGroup;
  

  myControl = new FormControl;
  options:string[];
  filteredOptions: Observable<string[]>;
  cursoEx:boolean = false;
  descripcion:string = "";

  @Input() groupId!:number;
  @Input() group?:GroupRequest = new GroupRequest();
  @Output() onSave:EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder:FormBuilder,
    private groupService:GroupService
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:[
        this.group?.nombre,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(100)
        ]
      ],
      tema:[this.group?.tema,[Validators.required]],
      descripcion:[this.group?.descripcion,[Validators.required]],
      curso_n:[this.group?.curso_n,[Validators.required]],
      curso_d:[this.group?.curso_d,[Validators.required]]
    });

    if(this.groupId){
      this.groupService.get(this.groupId).subscribe(data => {
        let groupg = data as Group;
        this.form.controls['curso_d'].enable();
        this.form.patchValue({
          nombre: groupg.nombre,
          tema: groupg.tema,
          descripcion: groupg.descripcion,
          curso_n: groupg.curso.nombre,
          curso_d: groupg.curso.descripcion
        });
        this.form.controls['curso_d'].disable();
      });
    }
    
  }

  reloadOptions(e:any){
    let value:string = e['target']['value'];
    this.groupService.getCursosAuto(value).subscribe((data:any[])=>{
      this.options = data.map(crs=>{
        return crs['nombre'];
      });
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this.options)
      );
    });
    this.form.controls['curso_d'].enable();
    this.groupService.getCursoByNombre(value).subscribe((data:any)=>{
      if(data['body'] !== null){
        this.form.controls['curso_d'].setValue(data['body']['descripcion']);
        this.form.controls['curso_d'].disable();
      }
      });
  }

  clickOption(e:string){
    this.groupService.getCursoByNombre(e).subscribe((data:any)=>{
      this.form.controls['curso_d'].setValue(data['body']['descripcion']);
      this.form.controls['curso_d'].disable();
      });
  }

  save(){
    this.form.controls['curso_d'].enable();
    this.onSave.emit(this.form.value);
  }

}
