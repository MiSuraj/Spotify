import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AddArtistServiceService } from 'src/app/services/add-artist-service.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AddSongServiceService } from 'src/app/services/add-song-service.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {

  dropdownList = [];
  selectedItems = [ {}];
  dropdownSettings:IDropdownSettings={};

  


  constructor(private artistService:AddArtistServiceService,private formBuilder:FormBuilder,private songService:AddSongServiceService) { }
artistList=[];


  ngOnInit(): void {

    
 this.artistService.getAllArtist().subscribe((data:any)=>{
   console.log(data);
   this.artistList=data;
   console.log(this.artistList);
 })

this.dropdownSettings = {
  singleSelection: false,
  idField: 'aid',
  textField: 'name',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 5,
  allowSearchFilter: true
};


  }

 
  
  date:any;
  date1:string="";
  uploadImageData:any;

  artist=[
    {
    
     }
  
  ]
  song={
    "songName":"",
    "releaseDate":"",
    "rating":"4",
    "coverImgUrl":"",
    "artists":this.artist
  }


 


  //////////////////
  onItemSelect(item: any) {
    console.log("Select start");
    var temp={"aid":"","name":"","dob":"","bio":""};
    for(var i=0;i<this.artistList.length;i++){
      temp=this.artistList[i];
      if(temp.aid==item.aid)
      {
        this.selectedItems.push(temp);
      }   
    }
   
  }
  onSelectAll(items: any) {
    console.log("On Item SelectAll"+items);
  }
  




    //Gets called when the user clicks on submit to upload the image
    submit() {
          this.date1=this.date;
      this.song.releaseDate=this.date1;
      var temp={};
      for(var i=1;i<this.selectedItems.length;i++){
        console.log(this.selectedItems[i]);
        temp=this.selectedItems[i];
        this.artist.push(temp);
      }
       this.songService.addSong(this.song).subscribe((data:any)=>{
         alert("Song is Added!!");

       },
       (error)=>{
         alert("Something Went Wrong!!");
       }

       )
  


}



}

