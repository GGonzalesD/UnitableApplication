import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Group, GroupRequest } from '../group.model';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  form!: FormGroup;

  @Input() group?:any;
  @Output() onSave:EventEmitter<any> = new EventEmitter();

  constructor(
    private groupService:GroupService,
    private formBuilder:FormBuilder,
    private router:Router
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
    })
  }

  save(){
    let groupreq = new GroupRequest();
    groupreq.nombre = this.form.value['nombre'];
    groupreq.tema = this.form.value['tema'];
    groupreq.descripcion = this.form.value['descripcion'];
    groupreq.usuario_id = this.form.value['usuario_id'];
    groupreq.curso_id = this.form.value['curso_id'];
    
    this.groupService.create(groupreq).subscribe(()=>{
      this.groupService.getAllPageable().subscribe();
    });

    this.router.navigate(['admin/groups'])
  }

}
