import { Component, OnInit,Directive, ElementRef, ViewChild } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-my-tree',
  templateUrl: './my-tree.component.html',
  styleUrls: ['./my-tree.component.css']
})
export class MyTreeComponent implements OnInit {
  counter = 0
  constructor() {
    //console.log(this.numbers[0].name);
   }
   data ={
    value: 'Programming languages by programming paradigm',
    id:1,
    children: [
      {
        value: 'Object-oriented programming',
        id:2,
        children: [{ value: 'Java',"id":3 }, { value: 'C++',"id":4  }, { value: 'C#',"id":5  }]
      },
      {
        value: 'Prototype-based programming',
        id:6,
        children: [{ value: 'JavaScript',"id":7  }, { value: 'CoffeeScript',"id":8  }, { value: 'Lua',"id":9  }]
      }
    ]
  };
  
  @ViewChild('menu') menu: ElementRef;
  display = false
  public MakeBold = function(e) {
    console.log(e.srcElement.childNodes[1].style.display)
    if (this.display == false){
      this.display = true
      e.srcElement.childNodes[1].style.display = "block";
    }
    else{
    e.srcElement.childNodes[1].style.display = "none";
    this.display = false
    }
  }
  @ViewChild('text_area1') text_area1: ElementRef;
  rename;
  public Rename = function(e){
    console.log(e)
    this.rename = e.path[4+this.counter]
    this.text_area1.nativeElement.style.display = "block"
  }
  public RenameName = function(e){
    console.log(this.rename.childNodes[0])
    if(e.srcElement.value.replace(" ","") != "")
    this.rename.childNodes[0].data = e.srcElement.value;
    this.text_area1.nativeElement.style.display = "none"
  }
  public Remove = function(e){
    console.log(e.path[4+this.counter])
    e.path[4+this.counter].remove();
  }
  public New = function(e){
    console.log(e.path)
    e.path[4+this.counter].append('<li data-toggle="collapse" data-target=".outer" (dblclick)="MakeBold($event)">NewNode<div (id)="menu1" class="menu" style="display:none;" #menu> <div > <div class="menuOptions"> <i class="material-icons" style="top: 1vh;position: relative;">create</i> <a href="#" (click) = "Rename($event)"> Rename </a> </div> <div class="menuOptions"> <i class="material-icons" style="top: 1vh;position: relative;">delete_sweep</i> <a href="#" (click) = "Remove($event)"> Remove </a> </div> <div class="menuOptions"> <i class="material-icons" style="top: 1vh;position: relative;">add</i> <a href="#" (click) = "New($event)"> New </a> </div> <div class="menuOptions"> <i class="material-icons" style="top: 1vh;position: relative;">add</i> <a href="#" (click) = "NewF($event)"> New </a> </div> <div class="menuOptions"> <i class="material-icons" style="top: 1vh;position: relative;">clear</i> <a href="#" (click) = "Close($event)"> Close </a> </div> </div> </div> </li>')
    //e.path[4].outerHTML.append();
    this.counter+=1
    console.log(this.counter)
    e.path[2+this.counter].style.display = "none";
  }

  public NewF = function(e){
    console.log(e)

  }
  public Close = function(e){
    console.log(e)
    e.path[3].style.display = "none";
  }
  
  
  
  ngOnInit() {
  }

}
