package com.hackathon.hobbiton.entity;

import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


public @Data class Goal {
    private int id;
    private String title;
    private Integer progress;
    private Integer term;
    private Date dateCreated = new Date();
    private String description;
    private Boolean completed;
    private Date dateStarted;
    private Date dateLastProof;
    private List<String> achievements;
}
