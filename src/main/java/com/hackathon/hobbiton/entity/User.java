package com.hackathon.hobbiton.entity;

import java.time.LocalDate;
import java.util.Date;
import java.util.Objects;

public class User {

    private Long id;
    private String nickname;
    private String name;
    private String surname;
    private String password;
    private String email;
    private String sex;
    private Date birthday;



    public static class Builder {
        private User user;

        public Builder(){
            user=new User();
        }

        public Builder withNickname(String nickname){
            user.nickname=nickname;
            return this;
        }

        public Builder withName(String name){
            user.name=name;
            return this;
        }

        public Builder withSurname(String surname){
            user.surname=surname;
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

        public Builder withSex(String sex){
            user.sex=sex;
            return this;
        }

        public Builder withBirthday(Date birthday){
            user.birthday=birthday;
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

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
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

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) &&
                Objects.equals(nickname, user.nickname) &&
                Objects.equals(name, user.name) &&
                Objects.equals(surname, user.surname) &&
                Objects.equals(password, user.password) &&
                Objects.equals(email, user.email) &&
                Objects.equals(sex, user.sex) &&
                Objects.equals(birthday, user.birthday);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nickname, name, surname, password, email, sex, birthday);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", nickname='" + nickname + '\'' +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", sex='" + sex + '\'' +
                ", birthday=" + birthday +
                '}';
    }
}
