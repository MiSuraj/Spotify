package com.example.spotify.Service.ServiceIMPL;

import com.example.spotify.Service.UserService;
import com.example.spotify.models.User;
import com.example.spotify.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;
    @Override
    public User createUser(User user) throws Exception {

        return userRepo.save(user);
    }

    @Override
    public User getUserEmail(String email) {
        return userRepo.findByEmail(email);
    }

    @Override
    public User saveUser(User user) {
        return null;
    }
}
