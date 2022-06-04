package com.example.spotify.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "sid")
public class Songs {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int sid;

    private String sName;

    private String coverImgUrl;

    private String releaseDate;

    private int rating;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "songs")
    private Set<Artist_Song> artist_songs=new HashSet<>();


    public Songs() {
    }

    public Songs(String sName, String coverImgUrl, String releaseDate, int rating) {
        this.sName = sName;
        this.coverImgUrl = coverImgUrl;
        this.releaseDate = releaseDate;
        this.rating = rating;
    }

    public Songs(String sName, String coverImgUrl, String releaseDate, int rating, Set<Artist_Song> artist_songs) {
        this.sName = sName;
        this.coverImgUrl = coverImgUrl;
        this.releaseDate = releaseDate;
        this.rating = rating;
        this.artist_songs = artist_songs;
    }

    public int getSid() {
        return sid;
    }

    public void setSid(int sid) {
        this.sid = sid;
    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public String getCoverImgUrl() {
        return coverImgUrl;
    }

    public void setCoverImgUrl(String coverImgUrl) {
        this.coverImgUrl = coverImgUrl;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Set<Artist_Song> getArtist_songs() {
        return artist_songs;
    }

    public void setArtist_songs(Set<Artist_Song> artist_songs) {
        this.artist_songs = artist_songs;
    }

    @Override
    public String toString() {
        return "Songs{" +
                "sid=" + sid +
                ", sName='" + sName + '\'' +
                ", coverImgUrl='" + coverImgUrl + '\'' +
                ", releaseDate=" + releaseDate +
                ", rating=" + rating +
                ", artist_songs=" + artist_songs +
                '}';
    }
}
