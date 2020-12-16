package com.hackathon.hobbiton.database.pool;

import java.sql.Connection;

public interface Pool {
    Connection getConnection();
}
