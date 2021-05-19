import { AuthInterceptor } from './AuthInterceptor';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

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
import { SurveyResultDisplayerComponent } from './survey-result-displayer/survey-result-displayer.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { ChoiceComponent } from './choice/choice.component';
import { ChoiceListComponent } from './choice-list/choice-list.component';
import { SurveyManagerComponent } from './survey-manager/survey-manager.component';
import { SurveyManagerSurveyDisplayerComponent } from './survey-manager-survey-displayer/survey-manager-survey-displayer.component';


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'account-creation', component: AccountCreationComponent },
    { path: 'survey-json', component: SurveyJSONComponent },
    { path: 'survey-menu', component: SurveyMenuComponent},
    { path: 'vote', component: VoteComponent},
    { path: 'survey-menu/survey-creation', component: SurveyCreationComponent},
    { path: 'survey-list', component: SurveyListComponent},
    { path: 'vote', component: VoteComponent },
    { path: 'survey-menu/survey-manager', component: SurveyManagerComponent}
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
    SurveyResultDisplayerComponent,
    SurveyListComponent,
    ChoiceComponent,
    ChoiceListComponent,
    SurveyManagerComponent,
    SurveyManagerSurveyDisplayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true, relativeLinkResolution: 'legacy'})
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
