import { Component, inject, OnInit } from '@angular/core';
import { SuccessMessageService } from '@features/auth/services/success-message-services/success-message.service';

@Component({
  selector: 'app-succsess-message',
  imports: [],
  templateUrl: './succsess-message.component.html',
  styleUrl: './succsess-message.component.scss'
})
export default class SuccsessMessageComponent implements OnInit {
  successMessageService = inject(SuccessMessageService)
  
  message: string = '';
  ngOnInit(): void {
    this.successMessageService.successMessage$.subscribe({
      next: (message) => {
        this.message = message
      },
      error: (err) => {
        console.error('Error receiving success message:', err);
      }
    })
  }


}
