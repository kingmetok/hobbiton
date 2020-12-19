package com.hackathon.hobbiton.encrypt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.hackathon.hobbiton.entity.User;

import java.util.Base64;

public class JWTCreator {
    private static final String SECRET_KEY = "fLuqX/9VzQu3IAnPvcAB8559000XMCoL+xDHWSkWp6E=";
    private static final byte[] secret = Base64.getDecoder().decode(SECRET_KEY);
    private static final Algorithm algorithm = Algorithm.HMAC256(secret);

    private JWTCreator() {
    }

    public static String create(User user) {
        return JWT.create()
                .withClaim("id", user.getId())
                .withClaim("login", user.getLogin())
                .withClaim("email", user.getEmail())
                .withClaim("gender", user.getGender())
                .sign(algorithm);
    }
}
