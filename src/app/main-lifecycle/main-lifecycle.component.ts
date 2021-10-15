import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {
   
  public foods:string[] = ["Rice", "Beans","Pizza"];
  public clients:Client[] =[];
  public name:string;
  public age:number;
  public food:string;
  public editClient:Client = null as any;
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    if(this.editClient ==null){
    this.clients.push({
      name:this.name,
      age:this.age,
      food:this.food
    });
  }
  this.age = null as any;
  this.name = "";
  this.food = "";
  }

}
