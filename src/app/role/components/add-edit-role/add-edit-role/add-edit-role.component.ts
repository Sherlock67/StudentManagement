import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Form, Validators } from '@angular/forms';
import { Role } from 'src/app/role/models/role';
import { RoleService } from 'src/app/role/services/role.service';
@Component({
  selector: 'app-add-edit-role',
  templateUrl: './add-edit-role.component.html',
  styleUrls: ['./add-edit-role.component.css']
})
export class AddEditRoleComponent implements OnInit{
  constructor(private builder:FormBuilder,private roleService : RoleService){
      this.registrationForm = this.builder.group({
        RoleName : ['',[Validators.required]]
      }

      )
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  @Input() role: Role ={
    RoleId: 0,
    RoleName: ''

  };
  registrationForm : FormGroup
 
  createNewRole(){
    this.roleService.addRole(this.role).subscribe(res=>{
      console.log(res.toString());
  
    })
  }
}
