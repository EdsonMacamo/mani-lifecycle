import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
export  interface LifeCycleEvent{
    id:number;
    name:string;
    color:string;
}
@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnDestroy, OnChanges {

  @Input() name:string;
  @Input() age:number;
  @Input() food:string;

  public events:LifeCycleEvent[] = [];
  netxEventId:number = 0;

  colors:string[] = ["accent", "warn", "primary"]
  constructor() {
    console.log(this.name + " - constructor")
    this.newEvent(" constructor");
   }

  ngOnInit(){
    console.log(this.name + " - OnInit")
    this.newEvent(" ngOnInit");
  }
   ngOnDestroy(){
    console.log(this.name + " - OnDestroy")
    this.newEvent("ngOnDestroy");
   }
   ngAfterContentInit(){
    console.log(this.name + " - ngAfterContentInit")
    this.newEvent("gAfterContentInit");
   }
   ngAfterViewInit(){
    console.log(this.name + " - ngAfterViewInit")
    this.newEvent("ngAfterViewInit");
   }
   ngOnChanges(changes:SimpleChanges){
    console.log(this.name + " - OnChanges")
    this.newEvent("ngOnChanges");
   }
   newEvent(name:string){
   let id = this.netxEventId++;
   this.events.push({id:id, color:this.colors[id%this.colors.length],name:name});
   setTimeout(()=>{
     let idx = this.events.findIndex((e) => e.id==id);
     if(idx >= 0)
     this.events.splice(idx, 1);
   },3000 + this.events.length*2000)
   }
}
