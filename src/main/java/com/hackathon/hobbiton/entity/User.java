package com.hackathon.hobbiton.entity;

import lombok.Data;

public @Data class User {

    private int id;
    private String login;
    private String password;
    private String email;
    private String gender;
    private Long points;
    private Long subscription;
    private Long followers;


    public static class Builder {
        private User user;

        public Builder() {
            user = new User();
        }

        public Builder withId(int id) {
            user.id = id;
            return this;
        }

        public Builder withLogin(String login) {
            user.login = login;
            return this;
        }

        public Builder withPassword(String password) {
            user.password = password;
            return this;
        }

        public Builder withEmail(String email) {
            user.email = email;
            return this;
        }

        public Builder withGender(String gender) {
            user.gender = gender;
            return this;
        }

        public Builder withPoints(Long points) {
            user.points = points;
            return this;
        }

        public Builder withSubscription(Long subscription) {
            user.subscription = subscription;
            return this;
        }

        public Builder withFollowers(Long followers) {
            user.followers = followers;
            return this;
        }

        public User build() {
            return user;
        }
    }

}
