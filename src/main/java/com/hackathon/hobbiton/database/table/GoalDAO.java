package com.hackathon.hobbiton.database.table;

import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.entity.Goal;
import com.hackathon.hobbiton.database.mapper.GoalMapper;

import java.sql.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;


public class GoalDAO {

    private static final String FIND_BY_GOAL_ID = "select * from goal where id=?";
    private static final String INCREMENT_PROGRESS = "select incrementProgressAndCheckComplete(?)";
    private static final String CREAT_GOAL = "insert into goal (title,term,description,data_started,data_created,user_id) values (?,?,?,?,?,?)";
    private static final String DELETE_ALL_BY_USER_ID = "delete from goal where user_id=?";
    private static final String DELETE_GOAL_BY_ID = "delete from goal where id=?";
    private static final String FIND_ALL_GOALS_BY_USER_ID = "select * from goal where user_id = ?";
    private static final String UPDATE_BY_CONDITION = "update goal set progress=0 where date_last_proof <> ? ";
    private static final String FIND_ACHIVEMENTS_FOR_USER_BY_GOALID = "select link from achivements left join user_achivements on id_achivements=achivements.id where id_goal=? and id_user=?";

    private final GoalMapper goalMapper = new GoalMapper();

    public List<Goal> findGoalsByUserId(int userId) {
        List<Goal> list = new ArrayList<>();
        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(FIND_ALL_GOALS_BY_USER_ID)) {
            preparedStatement.setInt(1, userId);
            ResultSet rs = preparedStatement.executeQuery();
            while (rs.next())
                list.add(goalMapper.extractFromResultSet(rs));
            connection.commit();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return list;
    }

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

    public boolean incrementProgress(int id) {
        boolean result = false;

        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(INCREMENT_PROGRESS)) {

            preparedStatement.setInt(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                result = resultSet.getBoolean(1);
            }

            connection.commit();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return result;
    }

    public Boolean createGoal(Goal goal, int id) {
        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(CREAT_GOAL, Statement.RETURN_GENERATED_KEYS)) {
            preparedStatement.setString(1, goal.getTitle());
            preparedStatement.setInt(2, goal.getTerm());
            preparedStatement.setString(3, goal.getDescription());
            preparedStatement.setDate(4, new Date(goal.getDateStarted().getTime()));
            preparedStatement.setDate(5, new Date(goal.getDateCreated().getTime()));
            preparedStatement.setInt(6, id);
            preparedStatement.executeUpdate();

            ResultSet generatedKeys = preparedStatement.getGeneratedKeys();

            if (generatedKeys.next()) {
                goal.setId(generatedKeys.getInt(1));
            }

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

    public void updateProgress() {
        String yesterday = getYesterdayDateString();
        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(UPDATE_BY_CONDITION)) {
            preparedStatement.setDate(1, java.sql.Date.valueOf(yesterday));
            preparedStatement.executeUpdate();
            connection.commit();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    private  String getYesterdayDateString() {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        return dateFormat.format(yesterday());
    }

    private java.util.Date yesterday() {
        final Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DATE, -1);
        return cal.getTime();
    }

    public List<String> findAchivementsForUserByGoalID(int userId, int goalId){
        List<String> list = new ArrayList<>();
        try (Connection connection = DAO.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(UPDATE_BY_CONDITION)) {
            preparedStatement.setInt(1, goalId);
            preparedStatement.setInt(2, userId);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()){
                list.add(resultSet.getString("link"));
            }
            connection.commit();
        }
            catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        return list;
    }

}

