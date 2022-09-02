import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
    providers: [Title]
})

export class SignUpComponent {
    public signupForm: FormGroup;
    public pageTitle: string = 'Angular app - SignUp Page'

    createForm() {
        this.signupForm = this.fb.group({
            fullname: [null, [Validators.required, Validators.maxLength(255)]],
            email: [null, [Validators.required, Validators.maxLength(255)]],
            username: [null, [Validators.required, Validators.maxLength(255)]],
            password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
            repeat_password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(32)]]
        })
    }

    constructor(private fb: FormBuilder, private userService: UserService, private title: Title, private router: Router) { 
        this.createForm();
        this.title.setTitle(this.pageTitle)
    }
    
    register() {
        this.userService.register(this.signupForm.value)
    }
}
