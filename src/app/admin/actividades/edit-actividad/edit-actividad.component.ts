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
  actividad:ActividadReq

  constructor(private actividadService:ActividadService, 
    private router:Router, 
    @Inject(MAT_DIALOG_DATA) public data:any) {
      this.actividad=this.data.actividad;
      this.editid=this.data.id;
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
