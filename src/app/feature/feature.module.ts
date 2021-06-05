import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import * as fromContainers from './user/containers';
import * as fromComponents from './user/components';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImportComponent } from './import/import.component';
import { ExportComponent } from './export/export.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NotFoundComponent,
    ...fromContainers.containers,
    ...fromComponents.components,
    AddProductComponent,
    ImportComponent,
    ExportComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [DatePipe]
})
export class FeatureModule { }
