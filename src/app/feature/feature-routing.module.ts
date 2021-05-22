import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../auth/role.guard';
import { LayoutComponent } from './layout/layout.component';

import * as fromUserContainers from './user/containers';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'user',
        component: fromUserContainers.UserComponent,
        canActivate: [RoleGuard]
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
