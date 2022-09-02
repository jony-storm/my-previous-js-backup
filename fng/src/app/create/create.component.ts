import { Component, OnInit } from '@angular/core';
import { CrudService } from '../test/crud.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    // styleUrls: ['./create.component.css']
})


export class CreateComponent implements OnInit {
    userForm: FormGroup;

    constructor(public fb: FormBuilder, private router: Router, public crudService: CrudService){ }

    ngOnInit() {
        this.userForm = this.fb.group({
            fullname: [null, [Validators.required, Validators.maxLength(255)]],
            email: [null, [Validators.required, Validators.maxLength(255)]],
            username: [null, [Validators.required, Validators.maxLength(255)]],
            password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
        })
    }
    
    submitForm() {
        this.crudService.create(this.userForm.value).subscribe(res => {
            console.log('User created!')
            this.router.navigateByUrl('/test')
            }
        )
    }
}