package com.hackathon.hobbiton.entity;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

public @Data class Goal {
    private int id;
    private String title;
    private Integer progress;
    private Integer term;
    private LocalDate dateCreated;
    private String description;
    private Boolean completed;
    private LocalDate dateStarted;
    private List<Proof> proofList;
}
