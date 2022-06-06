package com.example.spotify.repo;

import com.example.spotify.models.Artists;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtistRepo  extends JpaRepository<Artists,Integer> {

}
