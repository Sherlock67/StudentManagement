import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Module } from '../model/Module';
import { FormGroup,Validators,FormBuilder, Form } from '@angular/forms';
@Component({
  selector: 'app-add-edit-module',
  templateUrl: './add-edit-module.component.html',
  styleUrls: ['./add-edit-module.component.css']
})
export class AddEditModuleComponent implements OnInit{
  
  constructor(private service : ApiService){
   
  }
  
  
  @Input() module: Module ={
    ModuleId: 0,
    ModuleName: '',
    CreatedBy: '',
    UpdatedBy: ''
  };
  
  ngOnInit(): void {   
  }

saveModule(){
    this.service.addModule(this.module).subscribe(res=>{
      console.log(res.toString());

    })
  }
 
}
