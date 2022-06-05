import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AddArtistServiceService {

  constructor(private http:HttpClient) { }


  addArtist(data:any){
    return this.http.post(`${baseUrl}/artist/add`, data)

  }

  getAllArtist(){
    return this.http.get(`${baseUrl}/artist/get`)
  }

}
