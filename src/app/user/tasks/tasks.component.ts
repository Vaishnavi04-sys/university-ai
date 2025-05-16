import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from './tasks.interface';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];
  newTask: string = '';
  selectedFilter: 'all' | 'today' | 'completed' | any = 'all';

  constructor() {
    // Sample tasks
    this.tasks = [
      {
        id: '1',
        title: 'Complete AI Project',
        description: 'Finish the AI assistant integration',
        dueDate: new Date('2024-03-20'),
        completed: false,
        priority: 'high'
      },
      {
        id: '2',
        title: 'Study for Math Exam',
        description: 'Review calculus chapters 1-3',
        dueDate: new Date('2024-03-18'),
        completed: true,
        priority: 'medium'
      }
    ];
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        id: Date.now().toString(),
        title: this.newTask,
        description: '',
        dueDate: new Date(),
        completed: false,
        priority: 'medium'
      });
      this.newTask = '';
    }
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  get filteredTasks() {
    switch (this.selectedFilter) {
      case 'today':
        const today = new Date();
        return this.tasks.filter(task => 
          task.dueDate.toDateString() === today.toDateString()
        );
      case 'completed':
        return this.tasks.filter(task => task.completed);
      default:
        return this.tasks;
    }
  }
} 