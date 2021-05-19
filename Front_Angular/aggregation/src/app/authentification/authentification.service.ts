import { Observable } from 'rxjs';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { LoginAccount } from './../login/Account';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {

    constructor(private http: HttpClient) { }

    async authentificate(login: string, password: string): Promise<number> {

        let data = '{"username":"' + login + '", "password":"' + password + '"}'

        let url = environment.apiUrl.slice(0,-4)

        let result = await fetch(url + `/login`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        });

        let json = await result.json()

        if (json.token != undefined) {
            localStorage.setItem('id_token', json.token)
            return 1;

        }
        return -1;


        /*
        let json = await result.json()
        if (json.isLogged == true) {
            localStorage.setItem('id',json.id);
            return json.type
        }
        if (json.empty == true) return -2
        return -1;
        */
    }

    getRolesAndId(login: string, password: string): Observable<User> {

        return this.http.get<User>(environment.apiUrl + `/find_user2?username=` + login + `&password=` + password,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }


    async accountCreation(loginAccount: LoginAccount): Promise<boolean> {

        let data = JSON.stringify(loginAccount)

        let url = environment.apiUrl.slice(0,-4)

        let result = await fetch(url + `/register`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        let json = await result.json()

        return json.success;
    }
}
