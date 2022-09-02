import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProfileListService {
    private API_ADDRESS = 'http://localhost:3000/users'
    
    constructor(private http: HttpClient) {}

    getUsersInfo() {
        return this.http.get(this.API_ADDRESS)
    }

    getUserInfo(id: number) {
        return this.http.get(this.API_ADDRESS + "/" + id)
    }   
}
