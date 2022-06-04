package com.example.spotify.models;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerator;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "aid")
public class Artists {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int aid;

    private String name;
    private String dob;
    private String bio;


    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "artists")
    @JsonIgnore
    private Set<Artist_Song> songs=new HashSet<>();


    public Artists() {
    }

    public Artists(String name, String dob, String bio, Set<Artist_Song> songs) {
        this.name = name;
        this.dob = dob;
        this.bio = bio;
        this.songs = songs;
    }

    public Artists( String name, String dob, String bio) {
        this.aid = aid;
        this.name = name;
        this.dob = dob;
        this.bio = bio;
    }

    public Artists(int aid, String name, String dob, String bio, Set<Artist_Song> songs) {
        this.aid = aid;
        this.name = name;
        this.dob = dob;
        this.bio = bio;
        this.songs = songs;
    }

    public int getAid() {
        return aid;
    }

    public void setAid(int aid) {
        this.aid = aid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public Set<Artist_Song> getSongs() {
        return songs;
    }

    public void setSongs(Set<Artist_Song> songs) {
        this.songs = songs;
    }

    @Override
    public String toString() {
        return "Artists{" +
                "aid=" + aid +
                ", name='" + name + '\'' +
                ", dob=" + dob +
                ", bio='" + bio + '\'' +
                ", songs=" + songs +
                '}';
    }


}
