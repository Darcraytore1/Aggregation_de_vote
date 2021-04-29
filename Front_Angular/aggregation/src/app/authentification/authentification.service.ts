import { LoginAccount } from './../login/Account';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

    async authentificate(login: string, password: string): Promise<number> {

        let result = await fetch(environment.apiUrl + `/find_user?username=` + login + "&password=" + password,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let json = await result.json()
        if (json.isLogged == true) {
            localStorage.setItem('id',json.id);
            return json.type
        }
        if (json.empty == true) return -2
        return -1;
    }

    async accountCreation(loginAccount: LoginAccount): Promise<boolean> {

        let data = JSON.stringify(loginAccount)
        console.log(data)

        let result = await fetch(environment.apiUrl + `/create_account`,{
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
