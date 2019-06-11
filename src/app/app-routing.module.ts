import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HartReportsComponent} from './hart-reports/hart-reports.component';
import { LoginComponent } from './login/login.component';
import {HartMenuComponent} from './hart-menu/hart-menu.component'

const routes: Routes = [
  {path:'',redirectTo:'/Login',pathMatch:'full'},
  {path:'Login',component:LoginComponent},
  {path:'HartReports/:JobId',component:HartReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
