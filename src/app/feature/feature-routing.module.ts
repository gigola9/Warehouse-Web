import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoleGuard } from '../auth/admin-role.guard';
import { RoleGuard } from '../auth/role.guard';
import { AddProductComponent } from './actions/add-product/add-product.component';
import { AdminComponent } from './admin/containers/admin/admin.component';
import { ExportComponent } from './actions/export/export.component';
import { ImportComponent } from './actions/import/import.component';
import { LayoutComponent } from './layout/layout.component';
import { StatisticComponent } from './statistic/statistic.component';
import * as fromUserContainers from './user/containers';
import { UsersComponent } from './users/users.component';
import { WarehousesComponent } from './warehouses/warehouses.component';


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
        component: AddProductComponent
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
      },
      {
        path: 'statistic',
        component: StatisticComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminRoleGuard]
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AdminRoleGuard]
      },
      {
        path: 'products',
        component: AddProductComponent,
        data : {
          admin : true
        }
      },
      {
        path: 'warehouse',
        component: WarehousesComponent,
        canActivate: [AdminRoleGuard]
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
