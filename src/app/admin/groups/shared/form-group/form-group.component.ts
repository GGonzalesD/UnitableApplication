import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  form!: FormGroup;
  example!:any;

  @Input() group?:any;
  @Output() onSave:EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder:FormBuilder
    ) {}

  ngOnInit(): void {
    console.log(this.group);
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
    this.onSave.emit(this.form.value);
  }

}
