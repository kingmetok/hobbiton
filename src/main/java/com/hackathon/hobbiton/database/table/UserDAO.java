package com.hackathon.hobbiton.database.table;

import com.hackathon.hobbiton.constant.Constant;
import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.entity.User;

import java.sql.*;
import java.time.ZoneId;

public class UserDAO {

    public void add(User user) {
        final String UserInfoSQL = "insert into user_info(name, surname, birthday, sex) values (?, ?, ?, ?)";
        final String UserSQL = "insert into user(email, login, password, user_info_id) values (?, ?, ?, ?)";

        PreparedStatement statement;

        int userInfoID;

        try (Connection connection = DAO.getConnection()) {
            statement = connection.prepareStatement(UserInfoSQL, Statement.RETURN_GENERATED_KEYS);

            statement.setString(1, user.getName());
            statement.setString(2, user.getEmail());
            statement.setDate(3, user.getBirthday() == null ? null :
                    Date.valueOf(user.getBirthday().toInstant().atZone(ZoneId.systemDefault()).toLocalDate()));
            statement.setBoolean(4, user.getSex().equals(Constant.MAN));

            statement.executeUpdate();

            try (ResultSet resultSet = statement.getGeneratedKeys()) {
                resultSet.next();
                userInfoID = resultSet.getInt(1);
            }

            statement.close();

            statement = connection.prepareStatement(UserSQL);

            statement.setString(1, user.getEmail());
            statement.setString(2, user.getNickname());
            statement.setString(3, user.getPassword());
            statement.setInt(4, userInfoID);

            statement.executeUpdate();
            statement.close();

            connection.commit();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }
}
