import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { NotFoundComponent } from './feature/not-found/not-found.component';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
      data: { preload: true },
      canActivate: [AuthGuard]
    },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
