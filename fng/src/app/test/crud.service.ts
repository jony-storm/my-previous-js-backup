import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})

export class CrudService {
    private apiServer = "http://localhost:3000";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private httpClient: HttpClient) { }

    create(user): Observable<User> {
        return this.httpClient.post<User>(this.apiServer + '/users/', JSON.stringify(user), this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            )
    }

    getById(id: number): Observable<User> {
        return this.httpClient.get<User>(this.apiServer + '/users/' + id)
        .pipe(
            catchError(this.errorHandler)
        )
    }
    getAll(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.apiServer + '/users/')
        .pipe(
            catchError(this.errorHandler)
        )
    }

    update(id: number, user): Observable<User> {
        return this.httpClient.put<User>(this.apiServer + '/users/' + id, JSON.stringify(user), this.httpOptions)
        .pipe(
            catchError(this.errorHandler)
        )
    }

    delete(id: number){
        return this.httpClient.delete<User>(this.apiServer + '/users/' + id, this.httpOptions)
        .pipe(
            catchError(this.errorHandler),
            // console.log("deleted id: " + id)
        )
    }
    
    errorHandler(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}