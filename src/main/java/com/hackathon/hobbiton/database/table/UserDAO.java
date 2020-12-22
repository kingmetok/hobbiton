package com.hackathon.hobbiton.database.table;

import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.encrypt.HashAndSalt;
import com.hackathon.hobbiton.entity.User;
import com.hackathon.hobbiton.database.mapper.UserMapper;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserDAO {
    private static final String FIND_USER_BY_ID = "select user.*, a.link from user\n" +
            "left join user_achivements as ac on user.id = ac.id_user\n" +
            "left join achivements a on ac.id_achivements = a.id\n" +
            "where user.id=?";
    private static final String ADD_USER = "insert into user(login, password, email, gender, points, subscription, followers) values (?, ?, ?, ?,?,?,?)";
    private static final String EXIST_TWO = "select * from user where login = ?";
    private static final String DELETE_USER_BY_ID = "delete from user where id = ?";
    private static final String GET_USERS = "select id, login, email, gender, points, subscription, followers from user";

    public void add(User user) {
        try (Connection connection = DAO.getConnection();
             PreparedStatement statement = connection.prepareStatement(ADD_USER, Statement.RETURN_GENERATED_KEYS)) {
            statement.setString(1, user.getLogin());
            statement.setString(2, HashAndSalt.hashPassword(user.getPassword()));
            statement.setString(3, user.getEmail());
            statement.setString(4, user.getGender());
            statement.setInt(5, user.getPoints());
            statement.setInt(6, user.getSubscription());
            statement.setInt(7, user.getFollowers());

            statement.executeUpdate();

            try (ResultSet resultSet = statement.getGeneratedKeys()) {
                resultSet.next();
                user.setId(resultSet.getInt(1));
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
        boolean result = false;
        try (Connection connection = DAO.getConnection();
             PreparedStatement statement = connection.prepareStatement(EXIST_TWO)) {

            statement.setString(1, user.getLogin());

            try (ResultSet resultSet = statement.executeQuery()) {

                if (resultSet.next()) {
                    String password = resultSet.getString("password");

                    try {
                        if (HashAndSalt.checkPassword(user.getPassword(), password)) {
                            result = true;
                            user.setId(resultSet.getInt("id"));
                            user.setEmail(resultSet.getString("email"));
                            user.setGender(resultSet.getString("gender"));
                            user.setPoints(resultSet.getInt("points"));
                            user.setPoints(resultSet.getInt("subscription"));
                            user.setPoints(resultSet.getInt("followers"));
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

    public User findUserById(int id) {
        User user = new User();
        try (Connection connection = DAO.getConnection();
             PreparedStatement statement = connection.prepareStatement(FIND_USER_BY_ID)) {
            statement.setInt(1, id);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                user = UserMapper.extractFromResultSet(resultSet);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return user;

    }

    public List<User> getUsers() {
        List<User> users = new ArrayList<>();
        try (Connection connection = DAO.getConnection();
             PreparedStatement statement = connection.prepareStatement(GET_USERS)) {

            ResultSet resultSet = statement.executeQuery();

            while (resultSet.next()) {
                User user = new User();
                user.setId(resultSet.getInt("id"));
                user.setLogin(resultSet.getString("login"));
                user.setEmail(resultSet.getString("email"));
                user.setGender(resultSet.getString("gender"));
                user.setPoints(resultSet.getInt("points"));
                user.setSubscription(resultSet.getInt("subscription"));
                user.setFollowers(resultSet.getInt("followers"));

                users.add(user);
            }

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return users;
    }

    public void deleteUser(User user) {
        try (Connection connection = DAO.getConnection();
             PreparedStatement statement = connection.prepareStatement(DELETE_USER_BY_ID)) {
            statement.setInt(1, user.getId());
            statement.executeUpdate();

            connection.commit();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
}
