import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuccessMessageService {
  icon = new BehaviorSubject('');
  icon$ = this.icon.asObservable();

  additionalMessage = new BehaviorSubject('');
  additionalMessage$ = this.additionalMessage.asObservable(); 

  successMessage = new BehaviorSubject('');
  successMessage$ = this.successMessage.asObservable();

  sendMessage(message: string){
    this.successMessage.next(message);
  }
  sendIcon(message: string){
    this.successMessage.next(message);
  }
  sendAdditionalMessage(message: string){
    this.additionalMessage.next(message);
}
}
