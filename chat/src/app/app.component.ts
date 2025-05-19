import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'chat';
  messageText: string = '';
  clientMessages: string[] = [];
  sendMessage(): void {
  if(this.messageText != ''){
    this.clientMessages.push(this.messageText)
    this.messageText = ''
    } 
  }
} 