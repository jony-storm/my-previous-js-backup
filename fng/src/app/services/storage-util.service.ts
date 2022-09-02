/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageUtilService {

    constructor() {}

    saveUsers(info) {
        localStorage.setItem('userinfo', JSON.stringify(info))
    }

    getUserInfo(info) {
        info.filter((ele) => {
            if(ele.username == info.username)
        })
    }
    login(info) {
        this.userInfo.filter((ele) => {
            if(info.username == ele.username && info.password == ele.password) {
                this.found = true
            }
        })

        if(!this.found) {
            alert("Sorry you don't have any account")
            this.router.navigate(['sign_up'])
            // return
        } else if(sessionStorage.getItem("username") == info.username && this.found) {
            alert("You are already loggedin")
            return
        } else {
            sessionStorage.setItem("username", info.username)
            sessionStorage.setItem("loggedin", true)
            alert("Now you are loggedin")
            this.router.navigate(['profile'])
            // return
        }
    }

    logout() {
        sessionStorage.clear()
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
*/