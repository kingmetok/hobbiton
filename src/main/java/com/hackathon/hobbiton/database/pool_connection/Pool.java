package com.hackathon.hobbiton.database.pool_connection;

import java.sql.Connection;

public interface Pool {
    Connection getConnection();
}
