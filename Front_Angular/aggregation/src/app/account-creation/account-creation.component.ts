import { AuthentificationService } from './../authentification/authentification.service';
import { Account, CreationAccount } from './../login/Account';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-account-creation',
    templateUrl: './account-creation.component.html',
    styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {

    account: CreationAccount = new CreationAccount("","","");
    success: boolean = true
    form = this.fb.group({
        username: ['',Validators.required],
        email: ['',Validators.email],
        password: ['',Validators.required]
    });

    constructor(private fb: FormBuilder, private router: Router) { }

    ngOnInit(): void {
    }

    accountCreation(): void {
        this.account = new CreationAccount(this.form.value.username,this.form.value.password,this.form.value.email)
        let auth = new AuthentificationService()
        auth.accountCreation(this.account).then( success => {
            this.success = success
        })
    }
}
