import { Component, OnInit } from '@angular/core';
import { AddSongServiceService } from 'src/app/services/add-song-service.service';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

 

  constructor(private songService:AddSongServiceService) { 

  
  }
  

  songList=[
    {
        "sid": "",
        "sName": "",
        "coverImgUrl": "",
        "releaseDate": "",
        "rating": 4,
        "artist_songs": [
            {
                "artistSongId": "",
                "artists": {
                    "aid": "",
                    "name": "",
                    "dob": "",
                    "bio": ""
                },
                "songs": ""
              
              }   
           ]
        }
      ]

  artists=[{}];

  ngOnInit(): void {
    this.songService.getAllSong().subscribe((data:any)=>{
      this.songList=data;
      console.log(this.songList);
      this.artists=this.songList
    
    },
    (error)=>{
      alert("Server is not responding!!");
    })

  }


}

