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
import { UsuarioInfoComponent } from './usuarios/usuario-info/usuario-info.component';
import { ListUsuariosComponent } from './usuarios/list-usuarios/list-usuarios.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { MainChatComponent } from './chats/main-chat/main-chat.component';
import { FormMessageComponent } from './chats/form-message/form-message.component';
import { ListViewComponent } from './actividades/shared/list-view/list-view.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NewGroupComponent,
    EditGroupComponent,
    ListGroupComponent,

    NewActividadComponent,
    ActividadListComponent,
    EditActividadComponent,

    UsuarioInfoComponent,
    ListUsuariosComponent,
    EditUsuarioComponent,
    
    FormGroupComponent,
         MainChatComponent,
         FormMessageComponent,
         ListViewComponent,
          
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
