import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recompensa, Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-usuario-info',
  templateUrl: './usuario-info.component.html',
  styleUrls: ['./usuario-info.component.css']
})
export class UsuarioInfoComponent implements OnInit {

  recompensas!: Recompensa[];

  usuario!: Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.getUsuarioInfo();
    this.getRecompensas();

  }

  getUsuarioInfo(): void {
    this.usuarioService.getUsuarioInfo()
    .subscribe((data: Usuario) => this.usuario=data)
  }

  getRecompensas(): void {
    this.usuarioService.getRecompensas()
    .subscribe((data:Recompensa[]) => this.recompensas = data)
  }

  deleteUsuario(): void {
    const ok = confirm(`¿Está seguro que desea eliminar el usuario?`);
    if(ok){
      this.usuarioService.deleteUsuario()
      .subscribe(()=>{
        this.router.navigate(['/auth/login']);
      });
    }
  }

  

}
