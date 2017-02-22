import {Component, OnInit} from '@angular/core';
import {TaskService} from "./task.service";
import {Task} from "./task";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'create',
  templateUrl: 'createtask.component.html',
  styles: [''],
  providers: [TaskService]
})
export class CreateTaskComponent implements OnInit {

  index: number;

  task: Task = new Task('', '', '', '', '');

  constructor(private service: TaskService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.index = +data.indexSent;
      if (this.index || this.index === 0) {

        this.service.getData().subscribe((data: any) => {
            this.task = data[this.index]

          },
          (err: any) => alert(err), () => {
            console.log("Success");
          });
      }
    });
  }

  submit() {
    if (this.index || this.index === 0) {

      this.service.updateTask(this.task).subscribe()
    } else
      {
      this.service.addTask(this.task).subscribe()
        this.router.navigate(['show']);
    }


  }
}
