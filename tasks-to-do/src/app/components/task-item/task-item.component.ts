import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input()
  title:string = 'Task 1';
  @Input()
  description:string = 'Some description';
  @Input()
  date:Date = new Date();

  completed:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
