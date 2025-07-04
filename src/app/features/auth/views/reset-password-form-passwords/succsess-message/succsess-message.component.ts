import { Component, inject, OnInit } from '@angular/core';
import SuccessSecitonComponent from '@features/auth/components/success-seciton/success-seciton.component';
import { SuccessMessageService } from '@features/auth/services/success-message-services/success-message.service';

@Component({
  selector: 'app-succsess-message',
  imports: [SuccessSecitonComponent],
  templateUrl: './succsess-message.component.html',
  styleUrl: './succsess-message.component.scss'
})
export default class SuccsessMessageComponent{
  


}
