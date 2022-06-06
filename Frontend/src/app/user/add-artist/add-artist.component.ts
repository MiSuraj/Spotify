import { Component, OnInit } from '@angular/core';
import { AddArtistServiceService } from 'src/app/services/add-artist-service.service';


@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {
  

  constructor(private addArtistService:AddArtistServiceService) { }

  ngOnInit(): void {
  }
  date:any;
  artist=
{
  "name":"",
  "dob":"",
  "bio":""
}


  submit(){
    this.addArtistService.addArtist(this.artist).subscribe((data:any)=>{
      alert("Artist Added!!");
     window.location.href='/user/addSong';
    },
    (error)=>{
      alert("Something went wrong!!");
      console.log(error)
    })
   
   
  }

}
