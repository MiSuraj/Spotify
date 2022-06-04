package com.example.spotify.dto;

import com.example.spotify.models.Artists;

import java.util.List;
import java.util.Set;

public class SongDTO {

    public String songName;
    public String releaseDate;
    public int rating;
    public String coverImgUrl;
    public Set<Artists> artists;

}
