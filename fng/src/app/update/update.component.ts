import { Component, OnInit } from '@angular/core';
import { CrudService } from '../test/crud.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    // styleUrls: ['./create.component.css']
})


export class UpdateComponent implements OnInit {
    userForm: FormGroup;

    constructor(public fb: FormBuilder, private router: Router, public crudService: CrudService){ }

    /*update(user) {
        this.crudService.update(user).subscribe(p => {
            let index = this.users
                .findIndex(item => this.locator(item, p.id));
            this.users.splice(index, 1, p);
        });
    }*/

    ngOnInit() {
        this.userForm = this.fb.group({
            fullname: [null, [Validators.required, Validators.maxLength(255)]],
            email: [null, [Validators.required, Validators.maxLength(255)]],
            username: [null, [Validators.required, Validators.maxLength(255)]],
            password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
        })
    }

    submitForm() {
        this.crudService.update(sessionStorage.update_id, this.userForm.value).subscribe(res => {
            console.log('User created!')
            this.router.navigateByUrl('/test')
            }
        )
        /*this.crudService.update(this.userForm.value).subscribe(p => {
            let index = this.users
                .findIndex(item => this.locator(item, p.id));
            this.users.splice(index, 1, p);
            
        });*/
    }
}