package com.hackathon.hobbiton.mapper;

import com.hackathon.hobbiton.entity.Goal;
import com.hackathon.hobbiton.entity.Proof;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class GoalMapper {

    public Goal extractFromResultSet(ResultSet rs) throws SQLException{

        Goal goal = new Goal();
        goal.setId(rs.getLong("id"));
        goal.setTitle(rs.getString("title"));
        goal.setProgress(rs.getInt("progress"));
        goal.setTerm(rs.getInt("term"));
        goal.setDateCreated(rs.getDate("data_created").toLocalDate());
        goal.setDescription(rs.getString("description"));
        goal.setCompleted(rs.getBoolean("completed"));
        goal.setDateStarted(rs.getDate("data_started").toLocalDate());
        goal.setProofList(extractFromResultSetProof(rs));
        return goal;
    }

    public List<Proof> extractFromResultSetProof(ResultSet rs) throws SQLException{
        List<Proof> list = new ArrayList<>();
        Proof proof = new Proof();
        proof.setContent(rs.getString("content"));
        proof.setDateCreated(rs.getDate("date_created").toLocalDate());
         list.add(proof);
         return list;

    }

}
