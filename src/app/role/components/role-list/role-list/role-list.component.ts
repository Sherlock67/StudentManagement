import { Component, OnInit } from '@angular/core';
import { DefaultPageSize, Pager, Paging } from 'src/app/Common/Pager';
import { Role } from 'src/app/role/models/role';
import { RoleService } from 'src/app/role/services/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  pageSize :number = 5;
  constructor (private roleService : RoleService){
    this.pageSize = DefaultPageSize;
  }
  role:any;
  roleList: Role[] = [];

  paging : Paging ={
    pageNumber: 0,
    pageSize: 0,
    totalRows: 0,
    pager: {},
    pagedItems: {},
    pageStart: 0,
    pageEnd: 0,
    totalRowsInList: 0,
    isPaging: false,
    pageSizeList: {}
  };
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
   }
   roles: Role={
    RoleId : 0,
    RoleName : ""
  };

  addRoleModal() {
    this.roles = {
     RoleId : 0,
     RoleName : ""
    }
    //this.ActivateAddEditDepartComp = true;
  }
  setPaging(pageNumber: number,   isPaging: boolean) {
    if (isPaging) {
        this.refreshRoleList({}, pageNumber, this.paging.pageSize, false);
    }
    else {
        this.paging.pager = Pager.getPager(this.paging.totalRows, pageNumber, this.paging.pageSize);
        this.paging.pagedItems = this.roleList;
    }
  }
  refreshRoleList(searchParams: any = {}, pageNumber:number, pageSize:number,isPaging:boolean) {
    let params = {
      pageNumber :pageNumber ,
      pageSize : pageSize

    }
    this.roleService.getRoleList(params).subscribe(data => {      
      if(data){
        this.roleList = data;
        this.paging.pageNumber= pageNumber;
        this.paging.pageSize = pageSize,
        this.paging.totalRows = 0,
        this.paging.pager ={},
        this.paging.pagedItems= [],
        this.paging.pageStart= 0,
        this.paging.pageEnd= 0,
        this.paging.totalRowsInList=0,
        this.paging.isPaging= isPaging,
        this.paging.pageSizeList= Pager.pageSize()
      

      this.paging.totalRows = data.length > 0 ? data[0].total : 0;
      //paging info start   
      this.paging.totalRowsInList = data.length;
      if (this.paging.pageNumber == 0 || this.paging.pageNumber == 1) {
          this.paging.pageStart = 1;
          if (this.paging.totalRowsInList  < this.paging.pageSize) {
              this.paging.pageEnd = this.paging.totalRowsInList;
          } else {
              this.paging.pageEnd = this.paging.pageSize;
          }
      } else {
          this.paging.pageStart = (this.paging.pageNumber  - 1) * (this.paging.pageSize) + 1;
          this.paging.pageEnd = (this.paging.pageStart - 1) + (this.paging.totalRowsInList);
      }
      //paging info end
      if (this.paging.isPaging)
          this.setPaging( pageNumber, !this.paging.isPaging);
      else {
          this.paging.pager = Pager.getPager(this.paging.totalRows, this.paging.pageNumber, this.paging.pageSize);
          this.paging.pagedItems = data;
      }
      }
    });
  }
}
