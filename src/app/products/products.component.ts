import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent  {

  public lstProduct= ["Shampoo", "cream" , "Perfume"];
  public mycondition = false;
  public greeting ="";
  @Input() parentData ='';


  onClick(event:any){

    console.log(event);
    this.greeting = event.type + "is pressed";
  }

  greetuser(){
    return "greeting"
  }

}
