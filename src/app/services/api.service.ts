import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { Module } from '../module/model/Module';
import { Menu } from '../menu/model/Menu';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'https://localhost:44308';
  
  constructor(private http : HttpClient) { }
  
  addModule(module: Module): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'text/plain' }) };
    return this.http.post(this.apiUrl + '/Module/AddOrEditModule', module,httpOptions).
    pipe(map(res => res))
    .pipe(catchError(x=>x));
  }
  getModuleList(params:any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/Module/AllModules?pageNumber='+params.pageNumber+'&pageSize='+params.pageSize);
  }

  
  addMenu(menu:Menu) : Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'text/plain' }) };
    return this.http.post(this.apiUrl + '/Menu/AddOrEditMenu', menu,httpOptions).
    pipe(map(res => res))
   .pipe(catchError(x=>x));
  }


  getMenuList(params:any):Observable<any[]>{
    
    return this.http.get<any[]>(this.apiUrl + '/Menu/GetAllMenus?pageNumber='+params.pageNumber+'&pageSize='+params.pageSize);
  }
}
