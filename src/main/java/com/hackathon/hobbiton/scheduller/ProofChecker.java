package com.hackathon.hobbiton.scheduller;

import com.hackathon.hobbiton.database.table.GoalDAO;
import com.hackathon.hobbiton.encrypt.JWTCreator;
import com.hackathon.hobbiton.entity.Goal;
import com.hackathon.hobbiton.entity.User;
import org.quartz.Job;
import org.quartz.JobExecutionContext;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class ProofChecker implements Job {
    @Override
    public void execute(JobExecutionContext arg0) {
        GoalDAO goalDAO = new GoalDAO();
        goalDAO.updateProgress();
    }

}
