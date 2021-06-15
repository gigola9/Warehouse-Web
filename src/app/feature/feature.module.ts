import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import * as fromContainers from './user/containers';
import * as fromComponents from './user/components';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './actions/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImportComponent } from './actions/import/import.component';
import { ExportComponent } from './actions/export/export.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { StatisticComponent } from './statistic/statistic.component';
import { AdminComponent } from './admin/containers/admin/admin.component';
import { UsersComponent } from './users/users.component';
import { WarehousesComponent } from './warehouses/warehouses.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NotFoundComponent,
    ...fromContainers.containers,
    ...fromComponents.components,
    AddProductComponent,
    ImportComponent,
    ExportComponent,
    StatisticComponent,
    AdminComponent,
    UsersComponent,
    WarehousesComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule
  ],
  providers: [DatePipe]
})
export class FeatureModule { }
