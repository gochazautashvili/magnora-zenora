// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [];

  register(user: User): Observable<string> {
    const exists = this.users.some(u => u.email === user.email);
    if (exists) {
      return throwError(() => new Error('User already exists'));
    }

    this.users.push(user);
    return of('User registered successfully');
  }

  login(email: string, password: string): Observable<string> {
    
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      return of('Login successful');
    }
    return throwError(() => new Error('Invalid credentials'));
  }

  getUsers(): User[] {
    return this.users;
  }
}
