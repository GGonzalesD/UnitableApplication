import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Group } from '../shared/group.model';
import { GroupService } from '../shared/group.service';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {

  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  displayedColumns: string[] = ['id', 'nombre', 'nombre_curso', 'tema', 'descripcion', 'fecha_creacion', 'acciones'];
  dataSource!:MatTableDataSource<Group>;
  cantidad:number=0;

  constructor(private groupService:GroupService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.groupService.getAllPageable(0, 4).subscribe((data)=>{
      this.cantidad = data.totalElements;
      this.dataSource = new MatTableDataSource(data.content);
      this.dataSource.sort = this.sort;
    });
  }

  filtrar(e: Event){
    const filterValue = (e?.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  eliminar(id:number){
    const ok = confirm(`¿Estas seguro de eliminar '${id}'?`);
    if(ok){
      this.groupService.delete(id).subscribe(()=>{
        this.getAll();
      });
    }
  }

  mostrarMas(e:any){
    this.groupService.getAllPageable(e.pageIndex, e.pageSize).subscribe((data)=>{
      this.cantidad = data.totalElements;
      this.dataSource = new MatTableDataSource(data.content);
      this.dataSource.sort = this.sort;
    });
  }

}
