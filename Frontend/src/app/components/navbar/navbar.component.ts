import { Component, OnInit } from '@angular/core';
import { SignInServiceService } from 'src/app/services/sign-in-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn=false;
  user=null;

  constructor(private signInService:SignInServiceService) { }

 
  ngOnInit(): void {
    this.isLoggedIn=this.signInService.isLoggedin();
    this.user=this.signInService.getUser();
  }
  click(){
    alert("Click me")
  }
  public logout(){
    this.signInService.logout();
    this.isLoggedIn=false;
    this.user=null;
    this.signInService.logclear();

    window.location.reload();

  }

}
