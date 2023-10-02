import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ModuleComponent } from './module/module.component';

const routes: Routes = [
  { path: 'modules', component:  ModuleComponent},
  {path : 'menus',component: MenuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
