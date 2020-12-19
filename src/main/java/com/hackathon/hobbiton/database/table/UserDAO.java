package com.hackathon.hobbiton.database.table;

import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.encrypt.HashAndSalt;
import com.hackathon.hobbiton.entity.User;
import com.hackathon.hobbiton.mapper.UserMapper;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.sql.*;

public class UserDAO {
    final String FIND_USER_BY_ID = "select * from user where id=?";


    public void add(User user) {
        final String SQL = "insert into user(login, password, email, gender) values (?, ?, ?, ?)";
        try (Connection connection = DAO.getConnection();
             PreparedStatement statement = connection.prepareStatement(SQL, Statement.RETURN_GENERATED_KEYS)) {

            statement.setString(1, user.getLogin());
            statement.setString(2, HashAndSalt.hashPassword(user.getPassword()));
            statement.setString(3, user.getEmail());
            statement.setString(4, user.getGender());

            statement.executeUpdate();

            try (ResultSet resultSet = statement.getGeneratedKeys()) {
                resultSet.next();
                user.setId(resultSet.getLong(1));
            }

            connection.commit();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public String exist(User user) {
        String result = "no";

        if (emailExist("login", user.getLogin())) {
            result = "login";
        } else if (emailExist("email", user.getEmail())) {
            result = "email";
        }

        return result;
    }

    private boolean emailExist(String searchingObject, String string) {
        final String SQL = String.format("select * from user where %s = ?", searchingObject);

        boolean result = false;

        try (Connection connection = DAO.getConnection();
             PreparedStatement statement = connection.prepareStatement(SQL)) {

            statement.setString(1, string);

            try (ResultSet resultSet = statement.executeQuery()) {
                result = resultSet.next();
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return result;
    }

    public boolean existTwo(User user) {

        final String SQL = "select password from user where login = ?";

        boolean result = false;

        try (Connection connection = DAO.getConnection();
             PreparedStatement statement = connection.prepareStatement(SQL)) {

            statement.setString(1, user.getLogin());

            try (ResultSet resultSet = statement.executeQuery()) {

                if (resultSet.next()) {
                    String password = resultSet.getString(1);

                    try {
                        if (HashAndSalt.checkPassword(user.getPassword(), password)) {
                            result = true;
                        }
                    } catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
                        e.printStackTrace();
                    }
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return result;
    }

    public User findUserById(Long id) {
        User user = new User();
        try (Connection connection = DAO.getConnection();
             PreparedStatement statement = connection.prepareStatement(FIND_USER_BY_ID)) {
            statement.setLong(1, id);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                 user = UserMapper.extractFromResultSet(resultSet);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return user;

    }

}
