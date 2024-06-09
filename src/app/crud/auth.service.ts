import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { firstValueFrom } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';

constructor(private http: HttpClient, private state: StateService,
  private router: Router ) {
  this.checkAuthentication();
}

async authentification(username: string, password: string): Promise<boolean> {
  try {
      let user: any = await firstValueFrom(this.http.get("http://localhost:3000/users/" + username));
      if(password === user.password) {
        const decodedJwt: any = jwtDecode(user.token);
        this.state.authState = {
          isAuthenticated: true,
          user: decodedJwt.sub,
          role: decodedJwt.role,
          token: user.token
        };
        this.setAuthToken(user.token);
        return true;
      } else {
        throw new Error("Mauvais identifiants");
      }
    } catch (error) {
      console.error("Error during login:", error);
      return false;
    }
  }
  
  logout(): void {
  this.state.clearAuthState();
  
 this.router.navigate(['/login']);
  }
  
  getCurrentUserId(): string {
    return this.state.authState.user;
  }
  
  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }
  
  private setAuthToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  
  private getAuthToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.TOKEN_KEY);
    } else {
      return null;
    }
  }
  
  
  private checkAuthentication(): void {
    const token = this.getAuthToken();
    if (token) {
      const decodedJwt: any = jwtDecode(token);
      this.state.authState = {
        isAuthenticated: true,
        user: decodedJwt.sub,
        token: token,
        role: decodedJwt.role
      };
    }
  }
  }