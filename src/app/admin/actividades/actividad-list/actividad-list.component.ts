import { Component, OnInit } from '@angular/core';
import { Actividad } from '../shared/actividad.model';
import { ActividadService } from '../shared/actividad.service';

@Component({
  selector: 'app-actividad-list',
  templateUrl: './actividad-list.component.html',
  styleUrls: ['./actividad-list.component.css']
})
export class ActividadListComponent implements OnInit {

  actividades!: Actividad[];

  constructor(private actividadService:ActividadService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll():void{
    this.actividadService.getAll()
    .subscribe((data:Actividad[])=>this.actividades=data)
  }
}
