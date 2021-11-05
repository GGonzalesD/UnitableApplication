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

  constructor(private groupService:GroupService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.groupService.getAllPageable(0, 3).subscribe((data)=>{
      console.log(data.content);
      this.dataSource = new MatTableDataSource(data.content);
    });
  }

}
