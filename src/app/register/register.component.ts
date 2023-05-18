import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public fullName:string='';
  public email:string='';
  public address:string='';
public userArray:Array<any> =[];
  constructor(){}
  Save():void{
    this.userArray.push({
      "fullName":this.fullName,
      "email":this.email,
      "address":this.address
    })
  }
  onSubmit(f:NgForm){
    console.log(f);
  }
}
