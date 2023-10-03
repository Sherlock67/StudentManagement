import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private readonly apiUrl = 'https://localhost:44308';
  constructor(private http: HttpClient) { }

addRole(role: Role): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'text/plain' }) };
    return this.http.post(this.apiUrl + '/Role/AddOrEditRole', role,httpOptions).
    pipe(map(res => res))
    .pipe(catchError(x=>x));
  }
getRoleList(params:any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/Role/GetUserRoles?pageNumber='+params.pageNumber+'&pageSize='+params.pageSize);
  }

}
