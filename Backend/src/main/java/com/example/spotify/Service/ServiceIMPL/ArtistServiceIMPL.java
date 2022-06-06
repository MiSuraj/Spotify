package com.example.spotify.Service.ServiceIMPL;


import com.example.spotify.Service.ArtistService;
import com.example.spotify.Service.SongService;
import com.example.spotify.models.Artists;
import com.example.spotify.repo.ArtistRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistServiceIMPL implements ArtistService {

    @Autowired
    private ArtistRepo artistRepo;
    @Autowired
    private SongService songService;

    @Override
    public void addArtist(Artists artists) {


        artistRepo.save(artists);
    }

    @Override
    public List<Artists> getAllArtist() {
        List<Artists>  artist=artistRepo.findAll();

       // System.out.println(artist);



        return artist;
    }

}
