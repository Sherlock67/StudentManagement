import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleComponent } from './module/module.component';
import { AddEditModuleComponent } from './module/add-edit-module/add-edit-module.component';
import { ShowAllModuleComponent } from './module/show-all-module/show-all-module.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ShowAllMenuComponent } from './menu/show-all-menu/show-all-menu.component';
import { AddEditMenuComponent } from './menu/add-edit-menu/add-edit-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    ModuleComponent,
    AddEditModuleComponent,
    ShowAllModuleComponent,
    MenuComponent,
    ShowAllMenuComponent,
    AddEditMenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
