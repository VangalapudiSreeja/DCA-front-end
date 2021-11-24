import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  isLogOut:boolean = this.userService.getUserLogged();
  logout(){
   this.userService.setUserLoggedIn(false)
   this.router.navigateByUrl('login');
  }
}
