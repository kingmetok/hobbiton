package com.hackathon.hobbiton.controller.authorization;

import com.hackathon.hobbiton.entity.User;
import com.hackathon.hobbiton.entity.UserCreator;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

@WebServlet("/registration")
public class Registration extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {

        try {

            BufferedReader reader = request.getReader();
            User user = UserCreator.createUser(reader);

            System.out.println(user);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
