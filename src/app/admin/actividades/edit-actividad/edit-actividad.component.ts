import { Component, Inject, OnInit } from '@angular/core';
import { ActividadService } from '../shared/actividad.service';
import { Router } from '@angular/router';
import { ActividadReq } from '../shared/actividad.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-actividad',
  templateUrl: './edit-actividad.component.html',
  styleUrls: ['./edit-actividad.component.css']
})
export class EditActividadComponent implements OnInit {

  public invalid: boolean = true;
  editid:number
  actividad={
    nombre:"",
    detalles:"",
    fecha_ini_date: Date.now(),
    fecha_ini_time: new Date(0),
    fecha_fin_date: Date.now(),
    fecha_fin_time: new Date(0)
  }

  constructor(private actividadService:ActividadService, private router:Router) {
      this.editid = Number.parseInt(this.router.url.split("/")[3]);
     }

  ngOnInit(): void {
  
  }

  editActividad(){
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

    this.actividadService.editActividad(this.editid,act)
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
