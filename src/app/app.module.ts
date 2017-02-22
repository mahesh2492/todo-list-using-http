import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import {ShowTaskComponent} from "./showtask.component";
import {EditTaskComponent} from "./edit.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app-routing.module";
import {CreateTaskComponent} from "./createtask.component";
import {FormsModule} from "@angular/forms";
import {TaskService} from "./task.service";
@NgModule({
  imports:      [ BrowserModule , RouterModule.forRoot(routes),FormsModule,HttpModule],
  declarations: [ AppComponent , ShowTaskComponent,CreateTaskComponent,EditTaskComponent],
  bootstrap:    [ AppComponent ],
  providers: [TaskService]
})
export class AppModule { }
