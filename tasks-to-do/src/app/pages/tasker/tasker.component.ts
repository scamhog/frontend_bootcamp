import { Component, OnInit } from '@angular/core';

type task = {
  title: string;
  description: string;
  date: Date;
};

@Component({
  selector: 'app-tasker',
  templateUrl: './tasker.component.html',
  styleUrls: ['./tasker.component.css'],
})
export class TaskerComponent implements OnInit {
  task: task = { title: '', description: '', date: new Date() };
  taskList: task[] = [];

  constructor() {}

  ngOnInit(): void {}

  dateChange(event: any) {
    if (this.task.title.length > 5 && this.task.description.length > 5) {
      this.task.date = new Date(this.task.date.toString());
      this.taskList.push(this.task);
      this.task = { title: '', description: '', date: new Date() };
    }
  }
}
