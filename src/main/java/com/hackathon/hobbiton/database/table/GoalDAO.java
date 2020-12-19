package com.hackathon.hobbiton.database.table;

import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.entity.Goal;
import com.hackathon.hobbiton.entity.Proof;
import com.hackathon.hobbiton.mapper.Mapper;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class GoalDAO {

    private static final String FIND_BY_USER_ID = "select * from goal left join proof on goal_id=goal.id" +
            " left join user on user_id=user.id where user.id=?";

    private final Mapper mapper = new Mapper();

    public List<Goal> findGoalsByUserId(Long id) {
        List<Goal> goals= new ArrayList<>();
        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(FIND_BY_USER_ID)) {
            preparedStatement.setLong(1, id);
            ResultSet rs = preparedStatement.executeQuery();
            while (rs.next()){
                goals.add(mapper.extractFromResultSet(rs));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return goals;
    }
}
