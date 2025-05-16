import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ar-assistant',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-[#233559]">AR Assistant</h1>
        <button class="bg-[#c12535] text-white px-4 py-2 rounded-lg hover:bg-[#a01e2c] transition-colors">
          Start AR Session
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- AR View -->
        <div class="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <div class="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
            <!-- AR view will be integrated here -->
            <div class="flex items-center justify-center h-full">
              <p class="text-gray-500">AR camera view will be displayed here</p>
            </div>
          </div>
        </div>

        <!-- Assistant Controls -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-lg font-semibold text-[#233559] mb-4">Assistant Controls</h2>
          <div class="space-y-4">
            <button class="w-full bg-[#233559] text-white px-4 py-2 rounded-lg hover:bg-[#1a2a45] transition-colors">
              Find Building
            </button>
            <button class="w-full bg-[#233559] text-white px-4 py-2 rounded-lg hover:bg-[#1a2a45] transition-colors">
              Get Directions
            </button>
            <button class="w-full bg-[#233559] text-white px-4 py-2 rounded-lg hover:bg-[#1a2a45] transition-colors">
              Ask Question
            </button>
          </div>

          <div class="mt-6">
            <h3 class="text-[#233559] font-medium mb-2">Voice Commands</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>"Find the library"</li>
              <li>"How do I get to the science building?"</li>
              <li>"What's the nearest cafeteria?"</li>
              <li>"Show me the way to my next class"</li>
            </ul>
          </div>
        </div>

        <!-- Chat Interface -->
        <div class="lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-lg font-semibold text-[#233559] mb-4">Chat with Assistant</h2>
          <div class="space-y-4">
            <div class="h-64 overflow-y-auto border rounded-lg p-4 bg-gray-50">
              <!-- Chat messages will appear here -->
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="bg-[#c12535] text-white p-3 rounded-lg max-w-[80%]">
                    <p>Hello! How can I help you navigate the campus today?</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c12535] focus:border-[#c12535]"
              />
              <button class="bg-[#c12535] text-white px-4 py-2 rounded-lg hover:bg-[#a01e2c] transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ArAssistantComponent {
  // Component logic will be added as needed
} 