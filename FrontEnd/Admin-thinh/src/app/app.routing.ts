import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationComponent } from './views/animation/animation.component';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { CourseComponent } from './views/course/course.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { SaleoffComponent } from './views/saleoff/saleoff.component';
import { AuthGuard } from './_helpers/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      { path: 'saleoff', component:SaleoffComponent, canActivate: [AuthGuard] },
      { path: 'animation', component:AnimationComponent, canActivate: [AuthGuard] },
      {
        path: 'khoa-hoc',
        loadChildren: './views/course/course.module#CourseModule', canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard]
      },
      {
        path: 'students',
        loadChildren: './views/students/students.module#StudentsModule', canActivate: [AuthGuard]
      },
      {
        path: 'material',
        loadChildren: './views/material/material.module#MaterialModule', canActivate: [AuthGuard]
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
