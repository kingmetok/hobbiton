package com.hackathon.hobbiton.controller;

import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.scheduller.Scheduller;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;


@WebListener
public class MyServletContextListener implements ServletContextListener {

    public void contextInitialized(ServletContextEvent arg0) {
        Scheduller.start();
    }
}
