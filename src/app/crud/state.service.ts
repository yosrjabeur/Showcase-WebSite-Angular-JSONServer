import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public authState: any = {
    isAuthenticated: false,
    username: undefined,
    token: undefined,
    role: []
  };

  constructor() {}

  updateAuthState(isAuthenticated: boolean, username: string, token: string, role: string[]) {
    this.authState.isAuthenticated = isAuthenticated;
    this.authState.username = username;
    this.authState.token = token;
    this.authState.role = role;
  }
  clearAuthState() {
    this.authState.isAuthenticated = false;
    this.authState.user = undefined;
    this.authState.token = undefined;
    this.authState.role = [];
  }
}