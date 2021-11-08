import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewActividadComponent } from '../new-actividad/new-actividad.component';
import { Actividad } from '../shared/actividad.model';
import { ActividadService } from '../shared/actividad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividad-list',
  templateUrl: './actividad-list.component.html',
  styleUrls: ['./actividad-list.component.css']
})
export class ActividadListComponent implements OnInit {

  actividades!: Actividad[];

  constructor(private actividadService:ActividadService, public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll():void{
    this.actividadService.getAll()
    .subscribe((data:Actividad[])=>this.actividades=data)
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewActividadComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteActividad(id:number, name:string){
    const ok = confirm(`¿Estas seguro de eliminar '${name}'?`);
    if(ok){
      this.actividadService.deleteActividad(id)
      .subscribe(()=>{
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
      });
    }
  }
}
