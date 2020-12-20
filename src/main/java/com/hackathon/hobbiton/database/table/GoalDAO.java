package com.hackathon.hobbiton.database.table;

import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.entity.Goal;
import com.hackathon.hobbiton.mapper.GoalMapper;

import java.sql.*;


public class GoalDAO {

    private static final String FIND_BY_GOAL_ID = "select * from goal left join proof on goal_id=goal.id where goal.id=?";
    private static final String INCREMENT_PROGRESS = "update goal set progress=progress+1 where id=?";
    private static final String CREAT_GOAL = "insert into goal (title,term,description,data_started,user_id) values (?,?,?,?,?)";
    private static final String DELETE_ALL_BY_USER_ID = "delete from goal where user_id=?";
    private static final String DELETE_GOAL_BY_ID = "delete from goal where id=?";

    private final GoalMapper goalMapper = new GoalMapper();

    public Goal findGoalById(int id) {
        Goal goal = new Goal();
        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(FIND_BY_GOAL_ID)) {
            preparedStatement.setInt(1, id);
            ResultSet rs = preparedStatement.executeQuery();
            if (rs.next())
                goal = goalMapper.extractFromResultSet(rs);
            connection.commit();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return goal;
    }

    public Boolean incrementProgress(int id) {
        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(INCREMENT_PROGRESS)) {
            preparedStatement.setInt(1, id);
            preparedStatement.executeUpdate();
            connection.commit();
            return true;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return false;
    }

    public Boolean createGoal(Goal goal, int id) {
        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(CREAT_GOAL)) {
            preparedStatement.setString(1, goal.getTitle());
            preparedStatement.setInt(2, goal.getTerm());
            preparedStatement.setString(3, goal.getDescription());
            preparedStatement.setDate(4, Date.valueOf(goal.getDateStarted()));
            preparedStatement.setInt(5, id);
            preparedStatement.executeUpdate();
            connection.commit();
            return true;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return false;
    }

    public Boolean deleteAllGoalsByUserId(int userId) {
        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(DELETE_ALL_BY_USER_ID)) {
            preparedStatement.setInt(1, userId);
            preparedStatement.executeUpdate();
            connection.commit();
            return true;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return false;
    }

    public Boolean deleteGoalById(int id) {
        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(DELETE_GOAL_BY_ID)) {
            preparedStatement.setInt(1, id);
            preparedStatement.executeUpdate();
            connection.commit();
            return true;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return false;
    }
}