import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TreeModule } from 'ng2-tree';
import { MyTreeComponent } from './my-tree/my-tree.component';
@NgModule({
  declarations: [
    AppComponent,
    MyTreeComponent
  ],
  imports: [
    BrowserModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent,MyTreeComponent]
})
export class AppModule { }
