import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../src/app/task.service';
import { Task } from '../src/app/task.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})

export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  //fetching data from a service
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  markCompleted(id: number) {
    this.taskService.markTaskCompleted(id);
  }

  deleteTask(id:number){
    this.taskService.deleteTask(id);
  }

  //enable edit task mode
  editTask(task: Task){
    task.isEditing = true;
  }

  //update task
  saveTask(task:Task){
    task.isEditing = false;
    this.taskService.updateTask(task);
  }
}