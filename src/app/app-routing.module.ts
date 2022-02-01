import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"auth"
  },
  {
    path:"auth",
    loadChildren:()=> AuthModule
  },
  {
    path:"admin",
    loadChildren:()=> AdminModule,
    canActivate:[AdminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
