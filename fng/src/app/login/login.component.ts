import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser'
import { UserService } from '../services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ Title ]
})

export class LoginComponent {
    public pageTitle: string = 'Angular app - Login Page'
    public loginForm: FormGroup;
   
    constructor(private userService: UserService, private fb: FormBuilder, private title: Title, private router: Router) { 
        this.createForm();
        this.title.setTitle(this.pageTitle)
    }

    createForm() {
        this.loginForm = this.fb.group({
            username: [null, [Validators.required, Validators.maxLength(255)]],
            password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(32)]]
        })
    }

    login() {
        this.userService.login(this.loginForm.value)
    }
}
