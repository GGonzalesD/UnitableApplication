import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupRequest } from '../shared/group.model';
import { GroupService } from '../shared/group.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {

  constructor(private groupService:GroupService, private router:Router) { }

  ngOnInit(): void {
  }

  create(group: any) {
    let groupreq = new GroupRequest();
    groupreq.nombre = group['nombre'];
    groupreq.tema = group['tema'];
    groupreq.descripcion = group['descripcion'];
    groupreq.usuario_id = group['usuario_id'];
    groupreq.curso_id = group['curso_id'];
    
    this.groupService.create(groupreq).subscribe(()=>{
      this.groupService.getAllPageable().subscribe();
      this.router.navigate(['admin/groups']);
    });
  }
}
