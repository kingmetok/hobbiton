package com.hackathon.hobbiton.entity;

import java.util.Objects;

public class User {

    private Long id;
    private String login;
    private String password;
    private String email;
    private String gender;

    public static class Builder {
        private User user;

        public Builder(){
            user=new User();
        }

        public Builder withNickname(String nickname){
            user.login =nickname;
            return this;
        }

        public Builder withPassword(String password){
            user.password=password;
            return this;
        }

        public Builder withEmail(String email){
            user.email=email;
            return this;
        }

        public Builder withGender(String gender){
            user.gender=gender;
            return this;
        }

        public User build(){
            return user;
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) &&
                Objects.equals(login, user.login) &&
                Objects.equals(password, user.password) &&
                Objects.equals(email, user.email) &&
                Objects.equals(gender, user.gender);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, login, password, email, gender);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", login='" + login + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", gender='" + gender +
                '}';
    }
}
