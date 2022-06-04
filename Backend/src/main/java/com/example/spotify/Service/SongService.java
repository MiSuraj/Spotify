package com.example.spotify.Service;

import com.example.spotify.models.Artist_Song;
import com.example.spotify.models.Songs;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public interface SongService {

    public void addSong(Songs songs, Set<Artist_Song> artist_songSet);
    public List<Songs> getAllSong();
}
