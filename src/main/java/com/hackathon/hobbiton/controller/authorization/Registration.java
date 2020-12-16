package com.hackathon.hobbiton.controller.authorization;

import com.google.gson.Gson;
import com.hackathon.hobbiton.entity.User;

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

        try (BufferedReader reader = request.getReader()) {

            StringBuilder sb = new StringBuilder();

            try {
                String line;
                while ((line = reader.readLine()) != null) {
                    sb.append(line).append('\n');
                }
            } catch (IOException e) {
                e.printStackTrace();
            }

            Gson gson = new Gson();

            User user = gson.fromJson(sb.toString(), User.class);

            System.out.println(user.toString());

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
