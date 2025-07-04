import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  // Use Subject for one-time events
  private messageSubject = new BehaviorSubject<string>("");
  public message$ = this.messageSubject.asObservable();

  // Use BehaviorSubject for state that needs initial value
  private overlayStateSubject = new BehaviorSubject<boolean>(false);
  public overlayState$ = this.overlayStateSubject.asObservable();

  // Methods to emit data
  sendMessage(message: string) {
    this.messageSubject.next(message);
  }

  toggleOverlay(isOpen: boolean) {
    this.overlayStateSubject.next(isOpen);
  }

  // Add this method to check current overlay state
  isOverlayOpen(): boolean {
    return this.overlayStateSubject.value;
  }

  // Add this method to get current message/section
  getCurrentMessage(): string {
    return this.messageSubject.value;
  }
}
