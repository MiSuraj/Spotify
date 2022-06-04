import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddArtistComponent } from './user/add-artist/add-artist.component';
import { AddSongComponent } from './user/add-song/add-song.component';
import { ArtistComponent } from './user/artist/artist.component';
import { SongComponent } from './user/song/song.component';

const routes: Routes = [
  {
    path:"login",
    component:SignInComponent
  },
  {
    path:"signUp",
    component:SignUpComponent
  },

  {
    path:"song",
    component:SongComponent
  },
  {
    path:"artist",
    component:ArtistComponent
  },
  {
    path:"addSong",
    component:AddSongComponent
  },
  {
    path:"addArtist",
    component:AddArtistComponent
  }
 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
