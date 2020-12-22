package com.hackathon.hobbiton.database.mapper;

import com.hackathon.hobbiton.entity.User;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserMapper {
    public static User extractFromResultSet(ResultSet rs) throws SQLException {
        User user = new User();
        user.setId(rs.getInt("id"));
        user.setLogin(rs.getString("login"));
        user.setEmail(rs.getString("email"));
        user.setGender(rs.getString("gender"));
        user.setPoints(rs.getInt("points"));
        user.setSubscription(rs.getInt("subscription"));
        user.setFollowers(rs.getInt("followers"));

        user.getAchievements().add(rs.getString("link"));

        while (rs.next()) {
            user.getAchievements().add(rs.getString("link"));
        }

        return user;
    }
}
