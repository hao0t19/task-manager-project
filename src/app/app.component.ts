import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TaskFormComponent } from 'task-form/task-form.component'
import { TaskListComponent } from 'task-list/task-list.component'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,
    TaskFormComponent,TaskListComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task-manager';
}
