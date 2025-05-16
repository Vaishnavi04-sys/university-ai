import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'chat',
    loadComponent: () => import('./chat/chat.component').then(m => m.ChatComponent)
  },
  {
    path: 'tasks',
    loadComponent: () => import('./tasks/tasks.component').then(m => m.TasksComponent)
  },
  {
    path: 'ar-assistant',
    loadComponent: () => import('./ar-assistant/ar-assistant.component').then(m => m.ArAssistantComponent)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
