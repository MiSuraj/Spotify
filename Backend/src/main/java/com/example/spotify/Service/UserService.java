package com.example.spotify.Service;

import com.example.spotify.models.User;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface UserService {

    //creating user
    public User createUser(User user) throws Exception;
    public User getUserEmail(String email);
    public User saveUser(User user);
}
