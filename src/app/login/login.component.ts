import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Developer } from './../developer';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
          
  user:User = new User(2,"","",false);
  developers:Developer[] = [];
  developerModel:Developer = new Developer(0,"","","",new Date(),this.user,0,0,true,false);

  date:Date = new Date();

  latest_date =this.datePipe.transform(this.date, 'yyyy-MM-dd');

  developer:Developer = new Developer(0,"","","",new Date(),new User(2,"","",false),0,0,true,false);



  constructor(private developerservice:DeveloperService,private userservice:UserService,
    private router:Router,private datePipe:DatePipe) {}
    ngOnInit() {
    
    }
   onSubmit(){
     this.userservice.loginUser(this.user.userName,this.user.password).subscribe(data =>{
         this.userservice.setUserId(this.user.userId);
       this.router.navigateByUrl('home')
       this.userservice.setUserLoggedIn(true);
     }, res => console.log(res))
   }
   goToSignUp(){
     this.router.navigateByUrl('register');
   }
}
