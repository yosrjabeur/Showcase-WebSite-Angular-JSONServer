import { Component } from '@angular/core';
import { AuthService } from '../crud/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authService: AuthService) {} 

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout(); 
  }
}


