import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../shared/actividad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-actividad',
  templateUrl: './new-actividad.component.html',
  styleUrls: ['./new-actividad.component.css']
})
export class NewActividadComponent implements OnInit {

  public invalid: boolean = true;

  actividad={
    nombre:"",
    detalles:"",
    fecha_ini: new Date("2021-11-07T16:00:00.000+00:00"),
    fecha_fin: new Date("2021-11-20T16:00:00.000+00:00")
  }

  constructor(private actividadService:ActividadService, private router:Router) { }

  ngOnInit(): void {
  }

  create(){
    this.actividadService.createActividad(this.actividad)
      .subscribe(()=>{
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
      }, (error)=>{
      this.invalid = true;
      });
  }

}
