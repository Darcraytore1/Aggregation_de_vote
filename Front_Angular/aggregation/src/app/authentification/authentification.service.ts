import { LoginAccount } from './../login/Account';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ɵKeyEventsPlugin } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  async authentificate(login: string, password: string): Promise<number> {

    let data = {'username' : login, 'password' : password}

    let result = await fetch(`http://127.0.0.1:8000/api/find_user?username=` + login + "&password=" + password,{
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    let json = await result.json()
    if (json.isLogged == true) return json.type
    return -1;
  }

  async accountCreation(loginAccount: LoginAccount): Promise<Boolean> {

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
    console.log(json)

    return false;
  }
}
