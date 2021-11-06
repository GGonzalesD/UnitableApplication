import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  form!: FormGroup;
  @Input() groupId!:number;

  @Input() group?:any;
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
      usuario_id:[this.group?.usuario_id,[Validators.nullValidator]],
      curso_id:[this.group?.curso_id,[Validators.nullValidator]]
    });

    if(this.groupId){
      this.groupService.get(this.groupId).subscribe(data => {
        this.group = data;
        
        this.form.patchValue({
          nombre: this.group['nombre'],
          descripcion: this.group['descripcion'],
          usuario_id: 1,
          curso_id: this.group['curso']['id'],
          tema: this.group['tema'],
        });
      });
    }
    
  }

  save(){
    this.onSave.emit(this.form.value);
  }

}
