import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInServiceService } from '../services/sign-in-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private loginService:SignInServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  signUp={
    "name":"",
    "email":"",
    "password":""
  }
  submit(){
    this.loginService.addUser(this.signUp).subscribe((data:any)=>{
        alert("SignUp successfully happen!! You can Log in now ")
        this.router.navigate(['song'])
    },
    (error)=>{

      alert("Something Went Wrong");
      console.log(error)
    })

  }
  

}
