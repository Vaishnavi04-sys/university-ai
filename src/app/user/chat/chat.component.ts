import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChatMessage, ChatSession } from './chat.interface';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: ChatMessage[] = [];
  newMessage: string = '';
  chatSessions: ChatSession[] = [];
  currentSessionId: string | null = null;
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadChatSessions();
    this.createNewSession();
  }

  private loadChatSessions() {
    // TODO: Implement API call to load chat sessions
    this.chatSessions = [
      {
        id: '1',
        title: 'General Questions',
        messages: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
  }

  createNewSession() {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.chatSessions.push(newSession);
    this.currentSessionId = newSession.id;
    this.messages = [];
    
    // Add welcome message
    this.messages.push({
      content: 'Hello! I\'m your AI assistant. How can I help you today?',
      sender: 'assistant',
      timestamp: new Date()
    });
  }

  loadChatSession(sessionId: string) {
    this.currentSessionId = sessionId;
    const session = this.chatSessions.find(s => s.id === sessionId);
    if (session) {
      this.messages = session.messages;
    }
  }

  async sendMessage() {
    if (!this.newMessage.trim() || !this.currentSessionId) return;

    const userMessage: ChatMessage = {
      content: this.newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    this.messages.push(userMessage);
    this.isLoading = true;

    try {
      const response = await this.http.post('http://localhost:3000/api/chat', {
        message: this.newMessage,
        sessionId: this.currentSessionId
      }).toPromise();

      const assistantMessage: ChatMessage = {
        content: response as string,
        sender: 'assistant',
        timestamp: new Date()
      };

      this.messages.push(assistantMessage);

      // Update session in the list
      const sessionIndex = this.chatSessions.findIndex(s => s.id === this.currentSessionId);
      if (sessionIndex !== -1) {
        this.chatSessions[sessionIndex].messages = [...this.messages];
        this.chatSessions[sessionIndex].updatedAt = new Date();
      }
    } catch (error) {
      console.error('Error sending message:', error);
      this.messages.push({
        content: 'Sorry, I encountered an error. Please try again.',
        sender: 'assistant',
        timestamp: new Date()
      });
    } finally {
      this.isLoading = false;
      this.newMessage = '';
    }
  }
} 