import { Component } from '@angular/core';
import { TreeModule } from 'angular-tree-component';
import { ViewChild,ElementRef } from '@angular/core'
import { TreeModel, NodeEvent } from 'ng2-tree';
import { JsonPipe } from '@angular/common';
declare var angular: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [{ value: 'Java' }, { value: 'C++' }, { value: 'C#' }]
      },
      {
        value: 'Prototype-based programming',
        children: [{ value: 'JavaScript' }, { value: 'CoffeeScript' }, { value: 'Lua' }]
      }
    ]
  };
  options = {
    useVirtualScroll: true,
    nodeHeight: 50
  }
  @ViewChild('text_area') text_area: ElementRef;

  changeNodes = function(data){
    console.log(this.text_area.nativeElement.value)
    this.tree =  JSON.parse(this.text_area.nativeElement.value);
  }
  public logEvent(e: NodeEvent): void {
    console.log(e);

  }
  public changeJSON(e:NodeEvent): void{
    //this.text_area.nativeElement.value = JSON.stringify(this.tree);
  }
}
