package com.hackathon.hobbiton.database.mapper;

import com.hackathon.hobbiton.entity.Goal;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class GoalMapper {

    public Goal extractFromResultSet(ResultSet rs) throws SQLException {

        Goal goal = new Goal();
        int id=rs.getInt("id");
        goal.setId(id);
        goal.setTitle(rs.getString("title"));
        goal.setProgress(rs.getInt("progress"));
        goal.setTerm(rs.getInt("term"));
        goal.setDateCreated(rs.getDate("data_created"));
        goal.setDescription(rs.getString("description"));
        goal.setCompleted(rs.getBoolean("completed"));
        goal.setDateStarted(rs.getDate("data_started"));
        goal.setDateLastProof(rs.getDate("date_last_proof"));
        List<String> list = new ArrayList<>();
        do{
            list.add(extractFromResultSetAchivement(rs));
        } while (achivementForThisGoal(id,rs));
        goal.setAchivements(list);
        return goal;
    }

    private boolean achivementForThisGoal(Integer id,ResultSet rs) throws SQLException {
        rs.next();
        int nextId = rs.getInt("id");
        return nextId == id;
    }

    private String extractFromResultSetAchivement(ResultSet rs) throws SQLException {
        return rs.getString("link");
    }
}
