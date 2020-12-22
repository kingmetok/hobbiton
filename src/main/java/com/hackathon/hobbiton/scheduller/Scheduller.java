package com.hackathon.hobbiton.scheduller;

import org.quartz.*;
import org.quartz.impl.StdSchedulerFactory;

import static org.quartz.TriggerBuilder.newTrigger;

public class Scheduller {
    private Scheduller() {
    }

    public static void start() {
    SchedulerFactory shedFact = new StdSchedulerFactory();
    try {
        Scheduler scheduler = shedFact.getScheduler();
        scheduler.start();

        JobDetail job = JobBuilder.newJob(ProofChecker.class)
                .withIdentity("proofChecker", "group01")
                .build();

        CronTrigger trigger = newTrigger().withIdentity("trigger1").withSchedule(CronScheduleBuilder.cronSchedule("0 1 12 * * ?")).build();
        scheduler.scheduleJob(job, trigger);
    } catch (SchedulerException e) {
        e.printStackTrace();
    }
}
}
