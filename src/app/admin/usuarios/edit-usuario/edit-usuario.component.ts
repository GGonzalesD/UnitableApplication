import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsuarioReq } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  invalid: boolean = true;
  usuario: UsuarioReq

  constructor( private usuarioService: UsuarioService, private router:Router,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      this.usuario=this.data.usuario;
    }

  ngOnInit(): void {
  }

  updateUsuario(): void {
    const ok = confirm(`¿Está seguro de sus cambios?\nSi cambió su correo, tendrá que iniciar sesión nuevamente.`);
    if(ok) {
    this.usuarioService.updateUsuario(this.usuario)
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

}
