import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
