package com.example.spotify.models;

import javax.persistence.*;

@Entity
public class Artist_Song {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int artistSongId;


    @ManyToOne(fetch= FetchType.EAGER)
    private Artists artists;

    @ManyToOne
    private Songs songs;


    public Artist_Song() {
    }

    public Artist_Song(Artists artists, Songs songs) {
        this.artists = artists;
        this.songs = songs;
    }

    public Artist_Song(int artistSongId, Artists artists, Songs songs) {
        this.artistSongId = artistSongId;
        this.artists = artists;
        this.songs = songs;
    }

    public int getArtistSongId() {
        return artistSongId;
    }

    public void setArtistSongId(int artistSongId) {
        this.artistSongId = artistSongId;
    }

    public Artists getArtists() {
        return artists;
    }

    public void setArtists(Artists artists) {
        this.artists = artists;
    }

    public Songs getSongs() {
        return songs;
    }

    public void setSongs(Songs songs) {
        this.songs = songs;
    }

    @Override
    public String toString() {
        return "Artist_Song{" +
                "artistSongId=" + artistSongId +
                ", artists=" + artists +
                ", songs=" + songs +
                '}';
    }
}
