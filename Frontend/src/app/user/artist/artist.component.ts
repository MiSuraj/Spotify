import { Component, OnInit } from '@angular/core';
import { AddArtistServiceService } from 'src/app/services/add-artist-service.service';
import { AddSongServiceService } from 'src/app/services/add-song-service.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private artistService:AddArtistServiceService,private songService:AddSongServiceService) { }

  artistList=[
    {
      "aid":"",
      "name":"",
      "dob":"",
      "bio":""
    }
  ];
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
  ngOnInit(): void {
    this.artistService.getAllArtist().subscribe((data:any)=>{
      console.log(data);
      this.artistList=data;
      console.log(this.artistList);
      
    },
    (error)=>{
      alert("Server is Not responding");
    }
    )

    this.songService.getAllSong().subscribe((data:any)=>{
      console.log(data);
      this.songList=data;
       this.songName();

      console.log(data);
    },
    (error)=>{
      console.log(error)
    }
    )
  }


  songName(){
    
  this.songList.forEach(element => {
    this.artistList.forEach(element1=>{
      element1.aid

    })
    
  });
       

  }

  


}

