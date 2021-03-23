import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Bloodmodel } from '../bloodmodel';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 bloodgroups:any;
requiredBlood:string="";
requiredCount:number;
collection:any;
  constructor() { }

  ngOnInit(): void {

    var bloodmodel1=new Bloodmodel("A+",0);
    var bloodmodel2=new Bloodmodel("A-",0);
    var bloodmodel3=new Bloodmodel("B+",0);
    var bloodmodel4=new Bloodmodel("B-",0);
    var bloodmodel5=new Bloodmodel("O+",0);
    var bloodmodel6=new Bloodmodel("O-",0);
    var bloodmodel7=new Bloodmodel("AB+",0);
    var bloodmodel8=new Bloodmodel("AB-",0);

    this.bloodgroups = new Map();
    this.bloodgroups.set("A+", bloodmodel1);
    this.bloodgroups.set("A-", bloodmodel2);
    this.bloodgroups.set("B+", bloodmodel3);
    this.bloodgroups.set("B-", bloodmodel4);
    this.bloodgroups.set("O+", bloodmodel5);
    this.bloodgroups.set("O-", bloodmodel6);
    this.bloodgroups.set("AB+", bloodmodel7);
    this.bloodgroups.set("AB-", bloodmodel8);

  }

  check(){

    let compatibleGroupClasses = document.getElementsByClassName("selectedgroups");
    let finalGroupClasses = document.getElementsByClassName("finalGroups");

    for(let i=0;i<compatibleGroupClasses.length;i++){
      compatibleGroupClasses[i].classList.remove("selectedgroups");
    }

    for(let i=0;i<finalGroupClasses.length;i++){
      finalGroupClasses[i].classList.remove("finalGroups");
    }

   var result = [];
   result.push(this.bloodgroups.get('O+'),this.bloodgroups.get('O-'));
  
   if(this.requiredBlood[0]=="A"){
    if(this.requiredBlood.length>2){
      result.push(this.bloodgroups.get('AB+'),this.bloodgroups.get('AB-'));
    }else{
      result.push(this.bloodgroups.get('A+'),this.bloodgroups.get('A-'));
    }
  }
  else if(this.requiredBlood[0]=="B"){
    result.push(this.bloodgroups.get('B+'),this.bloodgroups.get('B-'));
  }

    for(let i=0;i<result.length;i++){
      let element = document.getElementById(result[i].bloodGroup);  
      if(result[i].count >= this.requiredCount){
        element.classList.add("finalGroups");
      } else{
        element.classList.add("selectedgroups");
      }
    }
  }
  // drop(event: CdkDragDrop<[]>){
  //   if(event.previousContainer===event.container){
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else{
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }
}
