import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface UserDetails {
  name: string;
  email: string;
  role: string;
  department: string;
  enrollmentNumber: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails: UserDetails | null = null;
  greeting: string = '';
  userName: string = 'John Doe'; // This should come from your auth service

  private morningGreetings = [
    'Rise and shine',
    'Good morning',
    'Morning has broken',
    'Top of the morning to you',
    'Hello, early bird'
  ];

  private afternoonGreetings = [
    'Good afternoon',
    'Hope your day is going well',
    'Afternoon delight',
    'Hello there',
    'Hope you\'re having a productive day'
  ];

  private eveningGreetings = [
    'Good evening',
    'Evening has arrived',
    'Hope you had a great day',
    'Welcome to the evening',
    'Hello, night owl'
  ];

  constructor() {}

  ngOnInit() {
    this.fetchUserDetails();
    this.updateGreeting();
  }

  private fetchUserDetails() {
    // Simulated API call - replace with actual API endpoint
    this.userDetails = {
      name: 'John Doe',
      email: 'john.doe@university.edu',
      role: 'Student',
      department: 'Computer Science',
      enrollmentNumber: 'CS2024001'
    };
  }

  private updateGreeting() {
    const hour = new Date().getHours();
    let greetings: string[];
    
    if (hour < 12) {
      greetings = this.morningGreetings;
    } else if (hour < 18) {
      greetings = this.afternoonGreetings;
    } else {
      greetings = this.eveningGreetings;
    }

    const randomIndex = Math.floor(Math.random() * greetings.length);
    this.greeting = greetings[randomIndex];
  }
} 