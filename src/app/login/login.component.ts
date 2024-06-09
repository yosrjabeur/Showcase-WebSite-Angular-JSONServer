import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../crud/auth.service';
import { Router } from '@angular/router';
import { StateService } from '../crud/state.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLogin!: FormGroup;
  errorMessage = undefined;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, public stateService: StateService) { } 

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: '',
      password: '',
    });
  }


login() {
  let login = this.formLogin.value.username;
    let password = this.formLogin.value.password;
    this.auth.authentification(login, password).then(
      (response) => { 
        this.router.navigate(['/admin/home']); 
      }
    ).catch(
      (error) => { 
        this.errorMessage = error; 
      }
    );
  }
}