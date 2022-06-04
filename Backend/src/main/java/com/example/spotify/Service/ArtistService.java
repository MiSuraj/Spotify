package com.example.spotify.Service;

import com.example.spotify.models.Artists;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ArtistService {

    public void addArtist(Artists artists);

    public List<Artists> getAllArtist();
}
