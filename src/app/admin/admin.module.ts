import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NewGroupComponent } from './groups/new-group/new-group.component';
import { EditGroupComponent } from './groups/edit-group/edit-group.component';
import { ListGroupComponent } from './groups/list-group/list-group.component';
import { FormGroupComponent } from './groups/shared/form-group/form-group.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewActividadComponent } from './actividades/new-actividad/new-actividad.component';
import { EditActividadComponent } from './actividades/edit-actividad/edit-actividad.component';
import { ActividadListComponent } from './actividades/actividad-list/actividad-list.component';
import { DeleteActividadComponent } from './actividades/delete-actividad/delete-actividad.component';
import { UsuarioInfoComponent } from './usuarios/usuario-info/usuario-info.component';
import { ListUsuariosComponent } from './usuarios/list-usuarios/list-usuarios.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NewGroupComponent,
    EditGroupComponent,
    ListGroupComponent,

    NewActividadComponent,
    ActividadListComponent,
    EditActividadComponent,
    DeleteActividadComponent,

    UsuarioInfoComponent,
    ListUsuariosComponent,
    
    FormGroupComponent
          
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AdminModule { }
