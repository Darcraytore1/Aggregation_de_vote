import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { SurveyComponent } from './survey/survey.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { RouterModule, Routes } from '@angular/router';
import { SurveyJSONComponent } from './survey-json/survey-json.component';
import { SurveyCreationComponent } from './survey-creation/survey-creation.component';
import { SurveyMenuComponent } from './survey-menu/survey-menu.component';
import { VoteComponent } from './vote/vote.component';
import { SurveyDisplayerComponent } from './survey-displayer/survey-displayer.component';
import { SurveyResultDisplayerComponent } from './survey-result-displayer/survey-result-displayer.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'account-creation', component: AccountCreationComponent },
    { path: 'survey-json', component: SurveyJSONComponent },
    { path: 'survey-menu', component: SurveyMenuComponent},
    { path: 'vote', component: VoteComponent},
    { path: 'survey-menu/survey-creation', component: SurveyCreationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminMenuComponent,
    SurveyComponent,
    UserMenuComponent,
    AccountCreationComponent,
    SurveyJSONComponent,
    SurveyCreationComponent,
    SurveyMenuComponent,
    VoteComponent,
    SurveyDisplayerComponent,
    SurveyResultDisplayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true, relativeLinkResolution: 'legacy'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
