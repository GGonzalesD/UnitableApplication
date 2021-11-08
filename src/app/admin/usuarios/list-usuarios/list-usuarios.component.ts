import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  usuarios!: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.usuarioService.getAllUsers()
    .subscribe((data:Usuario[]) => this.usuarios = data)
  }

}
