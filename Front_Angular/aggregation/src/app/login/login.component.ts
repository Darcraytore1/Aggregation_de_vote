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

    constructor() { }

    ngOnInit(): void {
    }

    authentification () {
        let auth = new AuthentificationService()
        auth.authentificate(this.account.login,this.account.password).then ( isLoged => {
            console.log(isLoged)
        })
    }

}
