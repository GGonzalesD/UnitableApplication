import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadListComponent } from './actividades/actividad-list/actividad-list.component';
import { DeleteActividadComponent } from './actividades/delete-actividad/delete-actividad.component';
import { EditActividadComponent } from './actividades/edit-actividad/edit-actividad.component';
import { NewActividadComponent } from './actividades/new-actividad/new-actividad.component';
import { EditGroupComponent } from './groups/edit-group/edit-group.component';
import { ListGroupComponent } from './groups/list-group/list-group.component';
import { NewGroupComponent } from './groups/new-group/new-group.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'groups',
        component:ListGroupComponent
      },
      {
        path:'groups/new',
        component:NewGroupComponent
      },
      {
        path:'groups/:id/edit',
        component:EditGroupComponent
      },
      {
        path:'actividades',
        component:ActividadListComponent,
      },
      {
        path:'actividades/nuevo',
        component:NewActividadComponent,
      },
      {
        path:'actividades/:id/editar',
        component:EditActividadComponent,
      },
      {
        path:'actividades/:id/eliminar',
        component:DeleteActividadComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
