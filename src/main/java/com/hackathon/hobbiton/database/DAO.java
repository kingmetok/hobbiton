package com.hackathon.hobbiton.database;

import com.google.gson.Gson;
import com.hackathon.hobbiton.database.pool.MySQLPoolConnection;
import com.hackathon.hobbiton.database.pool.Pool;
import com.hackathon.hobbiton.database.table.GoalDAO;
import com.hackathon.hobbiton.database.table.UserDAO;
import com.hackathon.hobbiton.entity.Goal;
import com.hackathon.hobbiton.entity.User;

import java.sql.Connection;
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

    public Goal findGoalById(int id) {
        return goalDAO.findGoalById(id);
    }

    public Goal findGoalById(int goalId, int userId) {
        return goalDAO.findGoalById(goalId, userId);
    }

    public List<Goal> findGoalByUserId(int userId) {
        return goalDAO.findGoalsByUserId(userId);
    }

    public boolean incrementProgress(int id) {
        return goalDAO.incrementProgress(id);
    }

    public String createGoal(Goal goal, int id) {
        String result = "error";
        if (goalDAO.createGoal(goal, id)) {
            result = "success";
        }
        return result;
    }

    public String findUserById(int id) {
        User user = userDAO.findUserById(id);
        return new Gson().toJson(user);
    }

    public String deleteGoalsByUserId(int id) {
        String result = "error";
        if (goalDAO.deleteAllGoalsByUserId(id)) result = "Goal was successfully deleted";
        return result;
    }

    public String deleteGoalByID(int id) {
        String result = "error";
        if (goalDAO.deleteGoalById(id)) result = "Goal was successfully deleted";
        return result;
    }

    public List<User> getAllUsers() {
        return userDAO.getUsers();
    }

    public String deleteCurrentUser(User user) {
        userDAO.deleteUser(user);
        if (userDAO.exist(user).equals("no")) {
            return "success";
        }
        return "error";
    }

    public void updateProgressDAO(){
        goalDAO.updateProgress();
    }

}
