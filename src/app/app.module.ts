import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditModuleComponent } from './edit-course/edit-module/edit-module.component';
import { EditModuleContentComponent } from './edit-course/edit-module-content/edit-module-content.component';
import { GuestComponent } from './guest/guest.component';
import { Routes } from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';

export const MainRoutes: Routes = [
  {path: '', redirectTo: '/g/login', pathMatch: 'full'},
  {
    path: 'g',
    component: GuestComponent,
    children: [{path: 'login', component: LoginComponent, data: {logout: false, title: 'Login'}}]
  },
  {
    path: 'app', component: MainAppComponent, children: [
    {
      path: 'list-courses',
      component: ListCoursesComponent,
      // canActivate: [AuthGuard],
    },
    {
      path: 'list-courses',
      component: ListCoursesComponent,
      // canActivate: [AuthGuard],
    },
  ]
  },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListCoursesComponent,
    EditCourseComponent,
    EditModuleComponent,
    EditModuleContentComponent,
    GuestComponent,
    MainAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
