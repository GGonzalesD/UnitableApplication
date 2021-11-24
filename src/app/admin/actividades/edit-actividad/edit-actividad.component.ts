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
    fecha_ini: new Date("2021-11-07T16:00:00.000+00:00"),
    fecha_fin: new Date("2021-11-20T16:00:00.000+00:00")
  }

  constructor(private actividadService:ActividadService, private router:Router) {
      this.editid = Number.parseInt(this.router.url.split("/")[3]);
     }

  ngOnInit(): void {
  
  }

  editActividad(){
    this.actividadService.editActividad(this.editid,this.actividad)
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
