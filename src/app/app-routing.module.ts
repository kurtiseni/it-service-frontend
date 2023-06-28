import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProfileComponent } from './pages/auth/profile/profile.component';
import { RoleGuard } from './pages/auth/role.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  {
    path: 'user/login',
    component: LoginComponent,
  },
  {
    path: 'user/profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/product/product.module').then((m) => m.ProductModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/product-service/product-service.module').then(
        (m) => m.ProductServiceModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'reports',
    component: ReportsComponent,
    canActivate: [RoleGuard],
    data: {
      expectedGroup: 2,
    },
  },
  {
    path: 'error-404',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: 'error-404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
