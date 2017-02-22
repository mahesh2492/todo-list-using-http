import { Component, OnInit }  from '@angular/core';
import {Task} from "./task";
import {TaskService} from "./task.service";

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  moduleId: module.id,
  selector: 'edit',
  templateUrl: 'edittask.component.html',
 // styleUrls: ['./app.component.css']
})
export class EditTaskComponent implements OnInit {
  task: Task;

  constructor(
    private service: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  // ngOnInit(): void {
  //   this.service.getData().subscribe((data: any) => {
  //     this.task = data
  //     //alert(JSON.stringify(data))
  //   },
  //     (err: any) => alert(err), () => {
  //       alert('Error')
  //     });
  //
  // }
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.service.getData1(+params['id']))
      .subscribe(task => this.task = task);
  }

  save(): void {
    this.service.updateTask(this.task)
      .subscribe()
  }

  goBack(): void {
    this.location.back();
  }
}
