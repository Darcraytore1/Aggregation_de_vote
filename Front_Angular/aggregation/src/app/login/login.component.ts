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

    constructor(private auth: AuthentificationService) { }

    ngOnInit(): void {
    }

    authentification () {
        this.auth.authentificate(this.account.login,this.account.password).then ( isLogged => {

            if (isLogged == 1) {
                this.auth.getRolesAndId(this.account.login,this.account.password).subscribe( result => {
                    localStorage.setItem('id',result.id.toString());
                    if (result.roles.includes("ROLE_ADMIN")) {
                        localStorage.setItem('accountType', "admin")
                    } else {
                        localStorage.setItem('accountType', "user")
                    }
                })
            } else {
                this.error = 1
            }
            /*
            else if (isLogged == -1) {
                this.error = 1
            } else {
                this.error = 2
            }
            */
        })
    }

    isLogged() : number {
        if (localStorage.getItem('accountType') == null) return -1
        if (localStorage.getItem('accountType') == "admin") return 1
        return 2
    }
}
