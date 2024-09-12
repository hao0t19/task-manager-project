import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] =[];

  getTasks():Task[]{
    return this.tasks;
  }

  addTasks( task: Task){
    this.tasks.push(task);
  }

  markTaskCompleted (id:number){
    const task = this.tasks.find(t => t.id === id );
    if(task){
      task.completed = true;
    }
  }

  deleteTask(id:number):void{
    const index = this.tasks.findIndex(t => t.id === id);
    if(index !== -1){
      this.tasks.splice(index,1);
    }
  }

  updateTask(updatedTask : Task){
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if(index !== -1){
      this.tasks[index] = updatedTask;
    }
  }

}
