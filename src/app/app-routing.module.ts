import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ModuleComponent } from './module/module.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  { path: 'modules', component:  ModuleComponent},
  {path : 'menus',component: MenuComponent},
  {path:'roles',component:RoleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
