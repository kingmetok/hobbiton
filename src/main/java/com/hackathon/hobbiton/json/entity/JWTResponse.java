package com.hackathon.hobbiton.json.entity;

public class JWTResponse {
    private final String jwt;

    public String getJwt() {
        return jwt;
    }

    public JWTResponse(String jwt) {
        this.jwt = jwt;
    }
}
