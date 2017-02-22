import {Injectable} from "@angular/core";
import {Task} from "./task";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Http, Headers} from "@angular/http";



@Injectable()
export class TaskService{
  // static data:Task=null;
  // static details:Task[]=[{
  //   date: '5/1/2017',
  //   title:'Angular Js2',
  //   description:'Angular Js2 is a framework for single page application',
  //   priority: 'High'
  // },
  //   {
  //     date: '15/1/2017',
  //     title:'HTML',
  //     description:'HTML is a markup language',
  //     priority: 'Medium'
  //   },
  //   {
  //     date: '27/2/2017',
  //     title:'Internal Assessment',
  //     description:'Test about our progress in training',
  //     priority: 'High'
  //   }];
  constructor(private http: Http) {
  }

  task: Task[] = [];

  /* Function to add tasks to database*/
  addTask(task: Task): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });
    let obj = {
      date: task.date,
      title: task.title,
      description: task.description,
      priority: task.priority
    };
    return this.http.post('http://localhost:9000/add', obj, {headers: jsonHeader})
      .map(data => {
        return this.extractData(data)
      })
      .catch((e: any) => {
        return this.handle(e)
      });
  }

  getData1(i: number) {
    return Observable.of<any>(this.task[i]);
    // return Observable.throw(Error('Observable Error Occurs'))
  }
  /* Function to fetching tasks from database*/
  getData(): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get('http://localhost:9000/get/all', {headers: jsonHeader}).map((response: any) => {
      return this.extractData(response)
    });
  }


  /* Function to udpate database of our todo list*/
  updateTask(task: Task): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });
    let obj = {
      date: task.date,
      title: task.title,
      description: task.description,
      priority: task.priority,
      _id: task._id
    };
    alert("here")
    alert(obj)
    return this.http.post('http://localhost:9000/update', obj, {headers: jsonHeader})
      .map(data => {
        return this.extractData(data)
      })
      .catch((e: any) => {
        return this.handle(e)
      });
  }
  /* Function to remove done task from database*/
  remove(index: string): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get('http://localhost:9000/remove/' + index, {headers: jsonHeader}).map((response: any) => {
      return this.extractData(response)
    });
  }

  extractData(res: any) {
    let body = res.json();
    return body;
  }
  private handle(error: any) {
    let errMsg: string;
    try {
      if (JSON.parse(error._body).message) {
        errMsg = JSON.parse(error._body).message
      } else {
        errMsg = 'Some thing went wrong';
      }

    }
    catch (e) {
      errMsg = 'Somthing Went Wrong try again!!'
    }
    return Observable.throw(new Error(errMsg));
  }


  // setDetails(task:Task){
  //   TaskService.details.push(task);
  // }
  // store(task:Task){
  //   TaskService.data=task;
  // }
}
