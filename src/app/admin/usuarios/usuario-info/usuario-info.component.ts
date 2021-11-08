import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-usuario-info',
  templateUrl: './usuario-info.component.html',
  styleUrls: ['./usuario-info.component.css']
})
export class UsuarioInfoComponent implements OnInit {

  usuario!: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarioInfo();
  }

  getUsuarioInfo(): void {
    this.usuarioService.getUsuarioInfo()
    .subscribe((data: Usuario) => this.usuario=data)
  }

}
