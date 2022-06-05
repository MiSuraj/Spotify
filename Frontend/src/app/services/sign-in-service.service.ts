import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class SignInServiceService {


  constructor(private http:HttpClient) {}
     
  //current user which is log in 
   result:string="";
   email:string="";
   pass:string="";
    public getLogin(data:any){
      this.email=data.email;
      this.pass=data.password;
      return this.http.get(`${baseUrl}/user/getUser/${this.email}/${this.pass}`)
    }
    public addUser(user: any) {
      return this.http.post(`${baseUrl}/user/signUp`, user);
    }




     //login user set token in localstorage
     public loginUser(token: string){
       localStorage.setItem("token",token);
       return true;
     }

     //user is login in or not
     public isLoggedin(){
       let tokenStr=localStorage.getItem("token")
       if(tokenStr==undefined||tokenStr==""||tokenStr==null)
       {
         return false;
       }
       else{
         return true;
       }

     }
     //logout"remove token from local storage
    public logout(){
      localStorage.removeItem('token');
      return true;
    }
    //get token
    public getToken(){
      return localStorage.getItem('token');
    }

    //set user detail
    public setUser(user: any)
{
  localStorage.setItem('user',JSON.stringify(user));

}
public getUser(){
  let userStr=localStorage.getItem("user");
  if(userStr!=null)
  {
    return JSON.parse(userStr);
  }
  else{
    this.logout();
    return null;
  }
}  



public logclear(){
  localStorage.clear();
}


}
