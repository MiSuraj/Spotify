package com.example.spotify.repo;

import com.example.spotify.models.Songs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SongRepo extends JpaRepository<Songs,Integer> {
}
