import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  public employees = [
    {"id":1 ,"name":"Andrew","age":30},
    {"id":2 ,"name":"Sara","age":21},
    {"id":3 ,"name":"Samin","age":25},
  ]

}
