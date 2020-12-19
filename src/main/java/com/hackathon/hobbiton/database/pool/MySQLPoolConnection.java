package com.hackathon.hobbiton.database.pool;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

public class MySQLPoolConnection implements Pool {
    private static MySQLPoolConnection mySQLPoolConnection;

    private MySQLPoolConnection() {
    }

    public static MySQLPoolConnection getInstance() {
        if (mySQLPoolConnection == null)
            mySQLPoolConnection = new MySQLPoolConnection();
        return mySQLPoolConnection;
    }

    @Override
    public Connection getConnection() {
        Context context;
        Connection connection = null;

        try {

            context = new InitialContext();
            DataSource dataSource = (DataSource) context.lookup("java:comp/env/jdbc/pool");
            connection = dataSource.getConnection();

        } catch (NamingException | SQLException e) {
            e.printStackTrace();
        }

        return connection;
    }
}
