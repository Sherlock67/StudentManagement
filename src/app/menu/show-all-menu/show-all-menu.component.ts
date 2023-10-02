import { Component, OnInit } from '@angular/core';
import { Pager, Paging,DefaultPageSize } from 'src/app/Common/Pager';
import { ApiService } from 'src/app/services/api.service';
import { Menu } from '../model/Menu';
    

@Component({
  selector: 'app-show-all-menu',
  templateUrl: './show-all-menu.component.html',
  styleUrls: ['./show-all-menu.component.css']
})
export class ShowAllMenuComponent implements OnInit {
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
  
  
  menu: Menu={
    MenuId: 0,
    MenuName: '',
    CreatedBy: '',
    UpdatedBy: '',
    ModuleId : 0,
    ModuleName : ""
  };
  menuList: Menu[] = [];

  ngOnInit(): void {
    this.refreshMenuList({},1,this.pageSize,true);
  }

  menuModalOpen() {
    this.menu = {
      MenuId: 0,
      MenuName: '',
      CreatedBy: '',
      UpdatedBy: '',
      ModuleId : 0,
      ModuleName : ""

    }
  }
  setPaging(pageNumber: number,   isPaging: boolean) {
    if (isPaging) {
        this.refreshMenuList({},pageNumber, this.paging.pageSize, false);
    }
    else {
        this.paging.pager = Pager.getPager(this.paging.totalRows, pageNumber, this.paging.pageSize);
        this.paging.pagedItems = this.menuList;
    }
  }
  refreshMenuList(searchParams: any = {}, pageNumber:number, pageSize:number,isPaging:boolean){
    let params = {
      pageNumber :pageNumber ,
      pageSize : pageSize
    }
    this.service.getMenuList(params).subscribe(data => {      
      if(data){
        this.menuList = data;
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
          this.paging.pager = Pager.getPager(this.paging.totalRows,this. paging.pageNumber, this.paging.pageSize);
          this.paging.pagedItems = data;
      }
      }
    });
  }

}
