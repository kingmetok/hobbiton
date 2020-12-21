package com.hackathon.hobbiton.mapper;

import com.hackathon.hobbiton.entity.Goal;
import com.hackathon.hobbiton.entity.Proof;

import java.security.Timestamp;
import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class GoalMapper {

    public Goal extractFromResultSet(ResultSet rs) throws SQLException {

        Goal goal = new Goal();
        int id = rs.getInt("id");
        goal.setId(id);
        goal.setTitle(rs.getString("title"));
        goal.setProgress(rs.getInt("progress"));
        goal.setTerm(rs.getInt("term"));
        goal.setDateCreated(rs.getTimestamp("data_created").toLocalDateTime());
        goal.setDescription(rs.getString("description"));
        goal.setCompleted(rs.getBoolean("completed"));
        goal.setDateStarted(rs.getTimestamp("data_started").toLocalDateTime());
        List<Proof> list = new ArrayList<>();
        do{
            list.add(extractFromResultSetProof(rs));
        } while (proofForThisGoal(id,rs));

        goal.setProofList(list);
        return goal;
    }
    public boolean proofForThisGoal(Integer id,ResultSet rs) throws SQLException {
        rs.next();
        int nextId = rs.getInt("id");
        return nextId == id;
    }

    public Proof extractFromResultSetProof(ResultSet rs) throws SQLException {
        Proof proof = new Proof();
        proof.setContent(rs.getString("content"));
        proof.setDateCreated(rs.getTimestamp("date_created").toLocalDateTime());
        return proof;

    }

}
