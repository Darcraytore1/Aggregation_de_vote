import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ɵKeyEventsPlugin } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  async authentificate(login: string, password: string): Promise<Boolean> {
    let result = await fetch(`http://127.0.0.1:8000/api/users`,{
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    let json = await result.json()
    let obj = JSON.parse(json)
    console.log(obj)
    obj.forEach(user => {
        if (login === user.login && password === user.password) return true
    });

    return false
  }
}
