import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleComponent } from './module/module.component';
import { AddEditModuleComponent } from './module/add-edit-module/add-edit-module.component';
import { ShowAllModuleComponent } from './module/show-all-module/show-all-module.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ShowAllMenuComponent } from './menu/show-all-menu/show-all-menu.component';
import { AddEditMenuComponent } from './menu/add-edit-menu/add-edit-menu.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { RoleComponent } from './role/role.component';

import { RoleListComponent } from './role/components/role-list/role-list/role-list.component';
import { AddEditRoleComponent } from './role/components/add-edit-role/add-edit-role/add-edit-role.component';
import { RoleService } from './role/services/role.service';
@NgModule({
  declarations: [
    AppComponent,
    ModuleComponent,
    AddEditModuleComponent,
    ShowAllModuleComponent,
    MenuComponent,
    ShowAllMenuComponent,
    AddEditMenuComponent,
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    RoleComponent,
    RoleListComponent,
    AddEditRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService,RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
