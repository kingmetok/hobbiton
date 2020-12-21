package com.hackathon.hobbiton.database.mapper;

import com.hackathon.hobbiton.entity.Goal;

import java.sql.ResultSet;
import java.sql.SQLException;

public class GoalMapper {

    public Goal extractFromResultSet(ResultSet rs) throws SQLException {

        Goal goal = new Goal();
        goal.setId(rs.getInt("id"));
        goal.setTitle(rs.getString("title"));
        goal.setProgress(rs.getInt("progress"));
        goal.setTerm(rs.getInt("term"));
        goal.setDateCreated(rs.getDate("data_created"));
        goal.setDescription(rs.getString("description"));
        goal.setCompleted(rs.getBoolean("completed"));
        goal.setDateStarted(rs.getDate("data_started"));
        goal.setDateLastProof(rs.getDate("date_last_proof"));

        return goal;
    }
}
