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
  setPaging(paging: Paging,campaignList: Module[],pageNumber: number,   isPaging: boolean) {
    if (isPaging) {
        this.refreshModuleList({}, paging.pageNumber, paging.pageSize, false);
    }
    else {
        paging.pager = Pager.getPager(paging.totalRows, paging.pageNumber, paging.pageSize);
        paging.pagedItems = campaignList;
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
        let paging: Paging = {
          pageNumber: pageNumber,
          pageSize: pageSize,
          totalRows: 0,
          pager: {},
          pagedItems: [],
          pageStart: 0,
          pageEnd: 0,
          totalRowsInList: 0,
          isPaging: isPaging,
          pageSizeList: Pager.pageSize()
      };

      paging.totalRows = data.length > 0 ? data[0].total : 0;
      //paging info start   
      paging.totalRowsInList = data.length;
      if (paging.pageNumber == 0 || paging.pageNumber == 1) {
          paging.pageStart = 1;
          if (paging.totalRowsInList  < paging.pageSize) {
              paging.pageEnd = paging.totalRowsInList;
          } else {
              paging.pageEnd = paging.pageSize;
          }
      } else {
          paging.pageStart = (paging.pageNumber  - 1) * (paging.pageSize) + 1;
          paging.pageEnd = (paging.pageStart - 1) + (paging.totalRowsInList);
      }
      //paging info end
      if (paging.isPaging)
          this.setPaging(paging,data, pageNumber, !paging.isPaging);
      else {
          paging.pager = Pager.getPager(paging.totalRows, paging.pageNumber, paging.pageSize);
          paging.pagedItems = data;
      }
      }
    });
  }

}
