import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { SurveyComponent } from './survey/survey.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'account-creation', component: AccountCreationComponent },
    { path: '', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminMenuComponent,
    SurveyComponent,
    UserMenuComponent,
    AccountCreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true, relativeLinkResolution: 'legacy'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
