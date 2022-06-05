package com.example.spotify.controllers;

//import com.example.spotify.Service.ServiceIMPL.LoginKeyService;
import com.example.spotify.Service.UserService;
import com.example.spotify.models.Login;
//import com.example.spotify.models.LoginKey;
import com.example.spotify.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;
//    @Autowired
//    private LoginKeyService loginKeyService;

    @PostMapping("/signUp")
    public User addUser(@RequestBody User user) throws Exception {

        String message="";
        User user1=null;
        user.setLoginKey("");
        try {
            user1=userService.createUser(user);
            if(user1!=null){
                message="User Created Successfully";
            }
        }
        catch (Exception e){
            message="Something Went Wrong";
            System.out.println(e.getMessage());

        }

        return user1;

    }

    @PostMapping("/login")
    public String login(@RequestBody Login login) throws Exception {
        String loginKey;
        User user=userService.getUserEmail(login.email);
        if(user.getPassword().equals(login.password)){
            loginKey=generateLoginKey();
             user.setLoginKey(loginKey);
             userService.createUser(user);
            return loginKey;
        }
        return "Login Failed";

    }

    @GetMapping("/getUser/{email}/{pass}")
    public User getU(@PathVariable("email") String email,@PathVariable("pass") String password) throws Exception {
        String loginKey;
        User user=userService.getUserEmail(email);
        if(user.getPassword().equals(password)){
            loginKey=generateLoginKey();
            user.setLoginKey(loginKey);
            userService.createUser(user);
            return user;
        }
        return null;


    }


    @GetMapping("/get")
    public User getUser(@RequestParam("u") String email){
        User user=userService.getUserEmail(email);
        if(user!=null){
            return user;
        }
        else{
            return null;
        }
    }

    public String generateLoginKey(){
        String loginKey="";
        String[] c={"v","djhnjf.d","dd","j.hbhdf","dhsnds",".DJdhb",".fjgot","qejhr.",".oeiroi","suraj"};
        for(int i=0;i<4;i++){
            double m = Math.random();
            int n = (int) (m * 10);
            loginKey=loginKey+c[n]+c[n];
        }
        return loginKey;
    }

}
