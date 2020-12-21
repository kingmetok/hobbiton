package com.hackathon.hobbiton.entity;


import lombok.Data;

import java.time.LocalDateTime;

public @Data class Proof {
    private int id;
    private String content;
    private LocalDateTime dateCreated;
}
