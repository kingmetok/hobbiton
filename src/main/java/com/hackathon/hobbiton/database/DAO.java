package com.hackathon.hobbiton.database;

import com.google.gson.Gson;
import com.hackathon.hobbiton.database.pool.MySQLPoolConnection;
import com.hackathon.hobbiton.database.pool.Pool;
import com.hackathon.hobbiton.database.table.GoalDAO;
import com.hackathon.hobbiton.database.table.UserDAO;
import com.hackathon.hobbiton.entity.Goal;
import com.hackathon.hobbiton.entity.User;

import java.sql.Connection;
import java.time.LocalDate;
import java.util.List;

public class DAO {
    private static DAO dao = new DAO();
    private static final Pool pool = MySQLPoolConnection.getInstance();

    private static final UserDAO userDAO = new UserDAO();
    private static final GoalDAO goalDAO = new GoalDAO();

    private DAO() {
    }

    public static DAO getInstance() {
        return dao;
    }

    public static Connection getConnection() {
        return pool.getConnection();
    }

    public String registration(User user) {

        String result = userDAO.exist(user);

        if (result.equals("no")) {
            userDAO.add(user);
            result = "success";
        }

        return result;
    }

    public String login(User user) {

        String result = "error";

        if (userDAO.existTwo(user)) {
            result = "success";
        }

        return result;
    }

    public String findGoalsByUserId(Long id) {
        List<Goal> goalsByUserId = goalDAO.findGoalsByUserId(id);
        return new Gson().toJson(goalsByUserId);
    }
}
