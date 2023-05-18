import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http:HttpClient){}
  
  public name="Sara";
  public topics = ['Angular','Vuejs','React'];
  public user = new User('','rob@test.com', 3455, '', 'morning', true);
  public postDetails:string='';
  public imgUrl:string='';
  public postUrl:string='';
  public header:string='';

  public addbackground:boolean= false;
  ngOnInit(): void {
    
  }



}
