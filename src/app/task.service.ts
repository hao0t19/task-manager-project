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

  filterTasks(status :'all' | 'completed' | 'pending'):Task[]{
    if(status === 'completed'){
      return this.tasks.filter(t=>t.completed);
    }else if (status === 'pending'){
      return this.tasks.filter(t => !t.completed);
    }
    return this.tasks;
  }
}
