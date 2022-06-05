import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGaurdGuard } from './services/user-gaurd.guard';

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
    path:'user',
    component:AddSongComponent,
    //pathMatch:'full',
    canActivate:[UserGaurdGuard],
    
    children:[

      {
        path:"addSong",
        component:AddSongComponent
      },
      {
        path:"addArtist",
        component:AddArtistComponent
      },
    ]
    }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
