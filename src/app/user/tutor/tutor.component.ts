import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tutor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tutor.component.html',
  styleUrl: './tutor.component.css'
})
export class TutorComponent {
  searchQuery: string = '';
  isLoading: boolean = false;
  searchResults: any = null;

  // Placeholder data structure for backend integration
  mockData = {
    syllabusLink: 'https://example.com/syllabus.pdf',
    steps: [
      {
        title: 'Introduction to Topic',
        description: 'Start with the basic concepts and definitions',
        resources: ['Video Lecture', 'Reading Material']
      },
      {
        title: 'Core Concepts',
        description: 'Deep dive into the main principles',
        resources: ['Practice Problems', 'Interactive Examples']
      },
      {
        title: 'Advanced Topics',
        description: 'Explore advanced concepts and applications',
        resources: ['Case Studies', 'Research Papers']
      }
    ]
  };

  onSearch() {
    this.isLoading = true;
    // TODO: Implement backend API call
    setTimeout(() => {
      this.searchResults = this.mockData;
      this.isLoading = false;
    }, 1000);
  }
}
