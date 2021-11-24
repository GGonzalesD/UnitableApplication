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
    fecha_ini_date: Date.now(),
    fecha_ini_time: new Date(0),
    fecha_fin_date: Date.now(),
    fecha_fin_time: new Date(0)
  }

  constructor(private actividadService:ActividadService, private router:Router) { }

  ngOnInit(): void {
  }

  create(){
    const act = {
      nombre: this.actividad.nombre,
      detalles: this.actividad.detalles,
      fecha_ini: new Date(this.actividad.fecha_ini_date),
      fecha_fin: new Date(this.actividad.fecha_fin_date),
    }
    
    const inidate = String(this.actividad.fecha_ini_date).split("-").map(Number);
    const findate = String(this.actividad.fecha_fin_date).split("-").map(Number);

    const initime = String(this.actividad.fecha_ini_time).split(":").map(Number);
    const fintime = String(this.actividad.fecha_fin_time).split(":").map(Number);
    
    act.fecha_ini.setFullYear(inidate[0], inidate[1], inidate[2]);
    act.fecha_ini.setUTCHours(initime[0], initime[1], 0, 0);
  
    act.fecha_fin.setFullYear(findate[0], findate[1], findate[2]);
    act.fecha_fin.setUTCHours(fintime[0], fintime[1], 0, 0);

    this.actividadService.createActividad(act)
      .subscribe((x)=>{
        console.log(x);
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
      }, (error)=>{
      this.invalid = true;
      });
  }

}
