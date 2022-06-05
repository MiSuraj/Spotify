package com.example.spotify.controllers;


import com.example.spotify.Service.ArtistService;
import com.example.spotify.Service.UserService;
import com.example.spotify.models.Artists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/artist")
@CrossOrigin("*")
public class ArtistController {

    @Autowired
    ArtistService artistService;
    @Autowired
    UserService userService;

    @PostMapping("/add")
    public String addArtist(@RequestBody Artists artists){
        //,@RequestParam("key") String loginKey,@PathVariable("email") String email
        String message="";


            try {
                artistService.addArtist(artists);
                message = "Artist Added";
            } catch (Exception e) {
                message = "Artist not added ,Server ERROR";
            }


        return message;

    }

    @GetMapping("/get")
    public List<Artists> getAllArtist(){
//        @RequestParam("key") String loginKey,@PathVariable("email") String email
//        if(loginKey.equals(userService.getUserEmail(email).getLoginKey())){

            return artistService.getAllArtist();

   //     }


    }

}
