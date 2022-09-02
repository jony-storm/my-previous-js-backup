import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class UserService {
    public userInfo = JSON.parse(localStorage.getItem('userinfo'))
    public found: boolean = false
    public isLoggedin = false
    public username = ""
    
    constructor(private router: Router) {}

    login(info) {
        this.userInfo.filter((ele) => {
            if(info.username == ele.username && info.password == ele.password) {
                this.found = true
            }
        })

        if(!this.found) {
            alert("Sorry you don't have any account")
            this.router.navigate(['sign_up'])
        } else if(sessionStorage.getItem("username") == info.username && this.found) {
            alert("You are already loggedin")
        } else {
            sessionStorage.setItem("username", info.username)
            sessionStorage.setItem("loggedin", "true")
            this.isLoggedin = true
            this.username = info.username
            alert("Now you are loggedin")
            this.router.navigate(['profile'])
        }
    }

    logout() {
        sessionStorage.clear()
        this.isLoggedin = false
        alert("You are now logged out")
        this.router.navigate([''])
    }

    register(info) {
        this.userInfo.filter((ele) => {
            if(info.username == ele.username && info.password == ele.password) {
                this.found = true
            }
        })

        if(this.found) {
            alert("You already have an account. Now login")
            this.router.navigate(['login'])
        } else {
            this.userInfo.push(info)
            localStorage.setItem('userinfo', JSON.stringify(this.userInfo))
            alert("You are now signed up. Now login")
            this.router.navigate(['login'])
        }
    }
}
