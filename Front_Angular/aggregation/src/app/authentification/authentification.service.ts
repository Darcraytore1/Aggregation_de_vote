import { LoginAccount } from './../login/Account';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

    async authentificate(login: string, password: string): Promise<number> {

        let result = await fetch(`http://127.0.0.1:8000/api/find_user?username=` + login + "&password=" + password,{
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

        let result = await fetch(`http://127.0.0.1:8000/api/create_account`,{
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
