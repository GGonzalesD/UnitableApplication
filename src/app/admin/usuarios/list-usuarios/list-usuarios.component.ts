import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario, UsuarioReq } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  usuarios!: Usuario[];

  constructor(private router:Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.usuarioService.getAllUsers()
    .subscribe((data:Usuario[]) => this.usuarios = data)
  }

  followUsuario(fwId: number, usuario: Usuario): void {
    this.usuarioService.followUsuario(fwId, usuario)
    .subscribe(() => {
      this.router.navigate(['/admin/usuario'])
    })
  }

}
