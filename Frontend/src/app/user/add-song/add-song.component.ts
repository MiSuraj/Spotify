import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { AddArtistServiceService } from 'src/app/services/add-artist-service.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  constructor(private artistService:AddArtistServiceService) { }
artistList=[];

  ngOnInit(): void {
 this.artistService.getAllArtist().subscribe((data:any)=>{
   console.log(data);
   this.artistList=data;
   console.log(this.artistList);
 })

  }
  selectedFile: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName: any;
  
  date:any;
  date1:string="";
  uploadImageData:any;




  


  openDialog(){
    alert("hhgvhg");
  

  }
  public onFileChanged(event:any) {
    //Select File
    
    this.selectedFile = event.target.files[0];
    console.log("ghf"+this.selectedFile)
  }
    //Gets called when the user clicks on submit to upload the image
    submit() {
      // console.log(this.selectedFile);
      // this.date1=this.date;
      // this.song.releaseDate=this.date1;
      // var e1=document.getElementsByTagName('select')[0];
      // this.getSelectValues(e1);
    
  


}

artist=[
  {
    "aid":"",   
   "name":"",
   "dob":"",
   "bio":"" 
   }

]
song={
  "songName":"",
  "releaseDate":"",
  "rating":"4",
  "coverImgUrl":"",
  "artists":this.artist
  
  
}

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

 getSelectValues(select:any) {
    var result = [];
    var options = select && select.options;
    var opt;
  
    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }

}
