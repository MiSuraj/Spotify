import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  constructor() { }


  ngOnInit(): void {
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
      console.log(this.selectedFile);
      this.date1=this.date;
      this.song.releaseDate=this.date1;
      
    
  


}
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

}
