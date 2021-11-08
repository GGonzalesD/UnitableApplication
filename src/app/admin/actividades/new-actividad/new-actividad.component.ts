import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../shared/actividad.service';

@Component({
  selector: 'app-new-actividad',
  templateUrl: './new-actividad.component.html',
  styleUrls: ['./new-actividad.component.css']
})
export class NewActividadComponent implements OnInit {

  actividad={
    nombre:"",
    detalles:"",
    fecha_ini: new Date("2021-11-07T16:00:00.000+00:00"),
    fecha_fin: new Date("2021-11-20T16:00:00.000+00:00")
  }

  constructor(private actividadService:ActividadService) { }

  ngOnInit(): void {
  }

  create(){
    this.actividadService.createActividad(this.actividad)
      .subscribe(data=>{console.log("EXITO")})
  }

}
