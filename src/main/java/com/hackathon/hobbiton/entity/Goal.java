package com.hackathon.hobbiton.entity;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

public @Data class Goal {
    private int id;
    private String title;
    private Integer progress;
    private Integer term;
    private LocalDateTime dateCreated;
    private String description;
    private Boolean completed;
    private LocalDateTime dateStarted;
    private List<Proof> proofList;
}
