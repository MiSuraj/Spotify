import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AddSongServiceService {

  constructor(private http:HttpClient) { }


     public addSong(data:any){
       return this.http.post(`${baseUrl}/song/add`,data);
     }
     public getAllSong(){
       return this.http.get(`${baseUrl}/song/getAll`)
     }
}
