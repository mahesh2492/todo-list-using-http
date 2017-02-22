import {Component, OnInit} from '@angular/core';
import {TaskService} from "./task.service";
import {Task} from "./task";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'show',
  templateUrl: 'showtask.component.html',
  //styleUrls: ['showtask.component.css']


})
export class ShowTaskComponent implements OnInit {
  constructor(private router: Router,
              private service: TaskService) {
  }

  tasks: Task[];

  ngOnInit() {
    this.service.getData().subscribe((data: any) => {
        this.tasks = data
        //alert(JSON.stringify(data))
      },
      (err: any) => alert(err), () => {
        alert('Error')
      });

  }


  delete(index: number) {
    this.service.remove(this.tasks[index]._id).subscribe()
    alert('Task is successfully removed')
    this.router.navigate(['show'])
  }


  edit(index: number) {
    //alert("here");
    this.router.navigate(['create',this.tasks[index]._id])
  }
}
