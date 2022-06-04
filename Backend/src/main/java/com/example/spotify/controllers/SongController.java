package com.example.spotify.controllers;

import com.example.spotify.Service.SongService;
import com.example.spotify.Service.UserService;
import com.example.spotify.dto.SongDTO;
import com.example.spotify.models.Artist_Song;
import com.example.spotify.models.Artists;
import com.example.spotify.models.Songs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/song")
@CrossOrigin("*")
public class SongController {

    @Autowired
    SongService songService;
    @Autowired
    UserService userService;

    @PostMapping("/add/{email}")
    public String addSong(@RequestBody SongDTO songDTO,@RequestParam("key") String loginKey,@PathVariable("email") String email){
       String message="";
        if(loginKey.equals(userService.getUserEmail(email).getLoginKey())) {


            try {

                Songs songs=songDtoToSong(songDTO);
                Set<Artist_Song> artist_songs=new HashSet<>();
                for(Artists artist:songDTO.artists) {

                    //create obj of artist
                    //create object of artist_song
                    //artist_song.setArtist(artist)
                    //artist_song_setSong(song)
                    //now add set<artist_song>.add( artist_song)
                    artist_songs.add(new Artist_Song(new Artists(artist.getName(),artist.getDob(),artist.getBio()), songs));

                }

                songService.addSong(songs,artist_songs);

                message = "Song Added";
            } catch (Exception e) {
                message = "Song Not Added, Server Error " + e.getMessage();
            }
        }
        else{
            System.out.println("Wrong Email Or Password");
            message="Wrong Email Or Password";
        }
        return message;




    }

    @GetMapping("/getAll/{email}")
    public List<Songs> getAllSong(@RequestParam("key") String loginKey,@PathVariable("email") String email){
        if(loginKey.equals(userService.getUserEmail(email).getLoginKey())) {
            try {


                List songs = songService.getAllSong();
                if (songs != null) {
                    return songs;
                }
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
        }

        return null;

    }


    public Songs songDtoToSong(SongDTO songDTO){
        Songs song=new Songs(songDTO.songName,songDTO.coverImgUrl,songDTO.releaseDate,songDTO.rating);
         return song;
    }
}
