import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignInServiceService } from '../services/sign-in-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private signInService:SignInServiceService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  signIn={
    "email":"",
    "password":""
  }



  submit(){
  
    if(this.signIn.email.trim()==''||this.signIn.email==null)
    {
     alert("Email is Required")
      return;
    }

    if(this.signIn.password.trim()==''||this.signIn.password==null)
    {
      alert("password Is required")
      return;
    }
    this.signInService.getLogin(this.signIn).subscribe((data:any)=>{
      console.log(data);
    if(data!=null){
      this.signInService.setUser(data);
      this.signInService.loginUser(data.loginKey);
     alert("Login Success")
      window.location.href='/user/addSong'

    }
    else{
      alert("Email or Password is wrong!!");
    }
   
  },
  (error)=>{
    alert("Something went wrong");
    console.log(error);
  }
  
  
  );

  }

}
