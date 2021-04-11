import { AuthentificationService } from './../authentification/authentification.service';
import { Account, CreationAccount } from './../login/Account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {

    account: CreationAccount = new CreationAccount("","","");

    constructor() { }

    ngOnInit(): void {
    }

    accountCreation(): void {
        let auth = new AuthentificationService()
        auth.accountCreation(this.account).then( succes => {
            console.log(succes)
        })
    }
}
