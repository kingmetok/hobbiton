package com.hackathon.hobbiton.database.table;

import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.entity.Goal;
import com.hackathon.hobbiton.mapper.GoalMapper;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class GoalDAO {

    private static final String FIND_BY_GOAL_ID = "select * from goal left join proof on goal_id=goal.id where goal.id=?";
    private static final String INCREMENT_PROGRESS = "update goal set progress=progress+1 where id=?";
    private static final String CREAT_GOAL = "insert into goal (title,term,description,data_started,user_id) values (?,?,?,?,?)";
    private static final String DELETE_ALL_BY_USER_ID = "delete from goal where user_id=?";

    private final GoalMapper goalMapper = new GoalMapper();

    public List<Goal> findGoalsByUserId(Long id) {
        List<Goal> goals = new ArrayList<>();
        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(FIND_BY_GOAL_ID)) {
            preparedStatement.setLong(1, id);
            ResultSet rs = preparedStatement.executeQuery();
            while (rs.next()) {
                goals.add(goalMapper.extractFromResultSet(rs));
            }
            connection.commit();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return goals;
    }

    public Boolean incrementProgress(Long id) {
        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(INCREMENT_PROGRESS)) {
            preparedStatement.setLong(1, id);
            preparedStatement.executeUpdate();
            connection.commit();
        return true;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return false;
    }

    public Boolean createGoal(Goal goal, Long id){
        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(CREAT_GOAL)) {
            preparedStatement.setString(1, goal.getTitle());
            preparedStatement.setInt(2, goal.getTerm());
            preparedStatement.setString(3, goal.getDescription());
            preparedStatement.setDate(4, Date.valueOf(goal.getDateStarted()));
            preparedStatement.setLong(5, id);
            preparedStatement.executeUpdate();
            connection.commit();
            return true;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return false;
    }

    public Boolean deleteAllGoalsByUserId(Long userId){
        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(DELETE_ALL_BY_USER_ID)) {
            preparedStatement.setLong(1,userId);
            preparedStatement.executeUpdate();
            connection.commit();
            return true;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return false;
    }
}
