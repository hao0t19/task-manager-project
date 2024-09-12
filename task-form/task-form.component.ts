import { Component } from '@angular/core';
import { TaskService } from '../src/app/task.service';
import { Task } from '../src/app/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports:[FormsModule],
  standalone:true
})
export class TaskFormComponent {
  taskName: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    //trim = cleaning up user input or ensuring consistent formatting
    if (this.taskName.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.taskName,
        completed: false,
      };
      this.taskService.addTasks(newTask);
      this.taskName = '';
    }
  }
}
