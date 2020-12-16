package com.hackathon.hobbiton.entity;

import com.google.gson.Gson;
import com.hackathon.hobbiton.encrypt.HashAndSalt;

import java.io.BufferedReader;
import java.io.IOException;

public class UserCreator {
    public static User createUser(BufferedReader reader) {
        StringBuilder sb = new StringBuilder();

        try {
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line).append('\n');
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        Gson gson = new Gson();

        User user = gson.fromJson(sb.toString(), User.class);
        user.setPassword(HashAndSalt.hashPassword(user.getPassword()));
        return user;
    }
}
