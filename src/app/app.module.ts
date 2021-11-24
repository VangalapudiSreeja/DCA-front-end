import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { UserComponent } from './user/user.component';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { PostqueryComponent } from './postquery/postquery.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AnswerComponent } from './answer/answer.component';
import { DeveloperComponent } from './developer/developer.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

const appRoutes:Routes=[
  {path : 'feed', component: FeedComponent},
  {path : 'home', component: HomeComponent},
  {path : 'app', component:AppComponent},
  {path: 'question', component:QuestionComponent},
  {path:'postquery', component:PostqueryComponent},
  {path: 'user', component:UserComponent},
  {path: 'answer', component:AnswerComponent},
  {path: 'developer',component:DeveloperComponent},
  {path:'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'logout', component:LogoutComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    UserComponent,
    HomeComponent,
    QuestionComponent,
    PostqueryComponent,
    LoginComponent,
    LogoutComponent,
    AnswerComponent,
    DeveloperComponent,
    RegisterComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
