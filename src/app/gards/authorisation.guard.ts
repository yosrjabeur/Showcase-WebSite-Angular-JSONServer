import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StateService } from '../crud/state.service';
@Injectable({
  providedIn: 'root'
})
export class AuthorisationGuard implements CanActivate {

  constructor(private st: StateService, private router: Router) {}

  canActivate(): boolean {
    if (this.st.authState && this.st.authState.role && this.st.authState.role.includes('ADMIN')) {
      return true;
    } else {
      this.router.navigate(['admin/notauth']);
      return false;
    }
  }
}
