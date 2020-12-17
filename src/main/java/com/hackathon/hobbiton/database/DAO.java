package com.hackathon.hobbiton.database;

import com.hackathon.hobbiton.database.pool.MySQLPoolConnection;
import com.hackathon.hobbiton.database.pool.Pool;
import com.hackathon.hobbiton.database.table.UserDAO;
import com.hackathon.hobbiton.entity.User;

import java.sql.Connection;

public class DAO {
    private static DAO dao = new DAO();
    private static final Pool pool = MySQLPoolConnection.getInstance();

    private static final UserDAO userDAO = new UserDAO();

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
}
