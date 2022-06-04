package com.example.spotify.Service.ServiceIMPL;

import com.example.spotify.Service.SongService;
import com.example.spotify.models.Artist_Song;
import com.example.spotify.models.Songs;
import com.example.spotify.repo.ArtistRepo;
import com.example.spotify.repo.SongRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class SongServiceImpl implements SongService {

    @Autowired
    private SongRepo songRepo;
    @Autowired
    private ArtistRepo artistRepo;


    @Override
    public void addSong(Songs songs, Set<Artist_Song> artist_songSet) {
        //ALGORITHM
        //create song
        //fetch every artist_song from the artist_song set
        //fetch the artist from the artist_song and save it aartist repo
        //song.getArtist_song().addAll(artist_songs)
        //songRepo.save(song)
        for(Artist_Song artist_song:artist_songSet){
            artistRepo.save(artist_song.getArtists());
            System.out.println(artist_song);
        }
        songs.getArtist_songs().addAll(artist_songSet);
         songRepo.save(songs);
    }

    @Override
    public List<Songs> getAllSong() {
        System.out.println("get all song");
        //System.out.println(songRepo.findAll());


        return songRepo.findAll();
    }


}
