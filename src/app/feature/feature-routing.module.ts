import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../auth/role.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { ExportComponent } from './export/export.component';
import { ImportComponent } from './import/import.component';
import { LayoutComponent } from './layout/layout.component';
import * as fromUserContainers from './user/containers';


const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'user',
        component: fromUserContainers.UserComponent,
        canActivate: [RoleGuard]
      },
      {
        path: 'product',
        component: AddProductComponent,
        canActivate: [RoleGuard]
      },
      {
        path: 'import',
        component: ImportComponent,
        canActivate: [RoleGuard]
      },
      {
        path: 'export',
        component: ExportComponent,
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
