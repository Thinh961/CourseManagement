import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { ServicesComponent } from './page/services/services.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { LoginComponent } from './page/login/login.component';
import { CousreComponent } from './page/cousre/cousre.component';
import { DetailComponent } from './page/detail/detail.component';
import { RegisterComponent } from './page/register/register.component';
import { ProfileComponent } from './page/profile/profile.component';
import { AuthGuard } from './_helpers/auth.guard';
import { AdminComponent } from './page/admin/admin.component';

const routes: Routes = [
  // { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  // { path: '**', redirectTo: '' },
  {
    path: '', component: DefaultLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'contact', component: ContactComponent, },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent, },
      { path: 'service', component: ServicesComponent, },
      { path: 'course', component: CousreComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'detail-course/:id', component: DetailComponent, canActivate: [AuthGuard] },
    ],

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const appRoutingModule = RouterModule.forRoot(routes);
