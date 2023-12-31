import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Module } from '../model/Module';
import {Pager,Paging,DefaultPageSize} from '../../Common/Pager';
@Component({
  selector: 'app-show-all-module',
  templateUrl: './show-all-module.component.html',
  styleUrls: ['./show-all-module.component.css']
})
export class ShowAllModuleComponent implements OnInit {
  pageSize :number = 5;
  constructor(private service : ApiService){
    this.pageSize = DefaultPageSize;
  }
  m : any;
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
  
  module: Module={
    ModuleId: 0,
    ModuleName: '',
    CreatedBy: '',
    UpdatedBy: ''
  };
  moduleList: Module[] = [];
  //ActivateAddEditDepartComp :boolean = false;
  ngOnInit(): void {
    this.refreshModuleList({},1,this.pageSize,true);
  }
  addModuleModal() {
    this.module = {
      ModuleId :0,
      ModuleName : "",
      CreatedBy : "",
      UpdatedBy : ""
    }
    //this.ActivateAddEditDepartComp = true;
  }
  editClick(item: any) {
    this.m = item;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteModule(item.ModuleId).subscribe(data => {
        alert(data.toString());
        //this.refreshEmpList();
        this.refreshModuleList({},1,this.pageSize,true);
      })
    }
  }
  setPaging(pageNumber: number,   isPaging: boolean) {
    if (isPaging) {
        this.refreshModuleList({}, pageNumber, this.paging.pageSize, false);
    }
    else {
        this.paging.pager = Pager.getPager(this.paging.totalRows, pageNumber, this.paging.pageSize);
        this.paging.pagedItems = this.moduleList;
    }
  }
  refreshModuleList(searchParams: any = {}, pageNumber:number, pageSize:number,isPaging:boolean) {
    let params = {
      pageNumber :pageNumber ,
      pageSize : pageSize

    }
    this.service.getModuleList(params).subscribe(data => {      
      if(data){
        this.moduleList = data;
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
