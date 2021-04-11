import { AuthentificationService } from './../authentification/authentification.service';
import { Account, LoginAccount } from './Account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    account: Account = new LoginAccount("","");
    error: number

    constructor() { }

    ngOnInit(): void {
    }

    authentification () {
        let auth = new AuthentificationService()
        auth.authentificate(this.account.login,this.account.password).then ( isLogged => {
            if (isLogged == 1) {
                localStorage.setItem('accountType', "admin")
            } else if (isLogged == 2) {
                localStorage.setItem('accountType', "user")
            } else if (isLogged == -1) {
                this.error = 1
            } else {
                this.error = 2
            }
        })
    }

    isLogged() : number {
        if (localStorage.getItem('accountType') == null) return -1
        if (localStorage.getItem('accountType') == "admin") return 1
        return 2
    }
}
