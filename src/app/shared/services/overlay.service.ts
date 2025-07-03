import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  // Use Subject for one-time events
  private messageSubject = new Subject<string>();
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

  // Get current state
  getCurrentOverlayState(): boolean {
    return this.overlayStateSubject.value;
  }
}
