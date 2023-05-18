import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  public Title:string='';
  public Detail:string='';
  public imageURL:string='';
  public URL:string='';
  public addBackground:boolean=false;

}
