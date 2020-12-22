package com.hackathon.hobbiton.scheduller;

import com.hackathon.hobbiton.database.DAO;
import org.quartz.Job;
import org.quartz.JobExecutionContext;

public class ProofChecker implements Job {
    @Override
    public void execute(JobExecutionContext arg0) {
        DAO.getInstance().updateProgressDAO();
    }

}
