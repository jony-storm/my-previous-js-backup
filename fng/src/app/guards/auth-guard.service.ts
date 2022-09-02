import { Injectable } from '@angular/core';
import { CanActivate, Router, Route } from '@angular/router'
import { UserService } from '../services/user.service'

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

    constructor(private userService, private router: Router) { }

    canActivate(): boolean {
        console.log("AuthGuardActivated")
        if(this.userService.isLoggedin) {
            return true
        } 
        console.log("You are not authorized to access this page")
        this.router.navigate(['login'])
        return false
    }
}
