import { Component, OnInit } from '@angular/core';
import { Bloodmodel } from '../bloodmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 bloodgroups:any[]=[];
requiredBlood:string="";
requiredCount:number;
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
 this.bloodgroups.push({bloodmodel1.bloodGroup: bloodmodel1});
 this.bloodgroups.push(bloodmodel2);
 this.bloodgroups.push(bloodmodel3);
 this.bloodgroups.push(bloodmodel4);
 this.bloodgroups.push(bloodmodel5);
 this.bloodgroups.push(bloodmodel6);
 this.bloodgroups.push(bloodmodel7);
 this.bloodgroups.push(bloodmodel8);
  }

  enter(){
    console.log(this.bloodgroups);
  }
  check(){
    let classes=document.getElementsByClassName("selectedgroups");
   
   var result = [];
   result.push('O+','O-');
  
   if(this.requiredBlood[0]=="A"){
    if(this.requiredBlood.length>2){
      result.push('AB+','AB-');
    }else{
      result.push('A+','A-')
    }
  }
  else if(this.requiredBlood[0]=="B"){
   result.push('B+','B-');
  }
  console.log(result)
  for(let i=0;i<result.length;i++){
    let element = document.getElementById(result[i]);
    element.classList.add("selectedgroups");;
  }
  }

}
