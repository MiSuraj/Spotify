import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './user/home/home.component';
import { ArtistComponent } from './user/artist/artist.component';
import { SongComponent } from './user/song/song.component';
import { AddSongComponent } from './user/add-song/add-song.component';
import { AddArtistComponent } from './user/add-artist/add-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    ArtistComponent,
    SongComponent,
    AddSongComponent,
    AddArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
