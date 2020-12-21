package com.hackathon.hobbiton.entity;

import lombok.Data;
import java.util.Date;


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
}
