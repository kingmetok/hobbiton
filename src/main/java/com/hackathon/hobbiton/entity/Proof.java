package com.hackathon.hobbiton.entity;


import lombok.Data;

import java.time.LocalDate;

public @Data class Proof {
    private Long id;
    private String content;
    private LocalDate dateCreated;
}
