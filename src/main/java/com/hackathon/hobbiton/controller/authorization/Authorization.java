package com.hackathon.hobbiton.controller.authorization;

import com.google.gson.Gson;
import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.encrypt.JWTCreator;
import com.hackathon.hobbiton.entity.User;
import com.hackathon.hobbiton.json.JsonUtil;
import com.hackathon.hobbiton.json.entity.Response;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns = {"/api/auth/registration", "/api/auth/login"})
public class Authorization extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {

        try {
            PrintWriter writer = response.getWriter();
            BufferedReader reader = request.getReader();
            User user = JsonUtil.createUser(reader);

            String result;
            String json;

            if (request.getRequestURI().endsWith("/login")) {
                result = DAO.getInstance().login(user);

                if (result.equalsIgnoreCase("success")) {
                    json = JsonUtil.jwtResponseGsonCreator(JWTCreator.encryptUser(user));
                } else {
                    response.setStatus(400);
                    json = JsonUtil.messageResponseGsonCreator(result);
                }
                writer.write(json);
            } else {
                result = DAO.getInstance().registration(user);

                if (!result.equalsIgnoreCase("success")) {
                    response.setStatus(400);
                    writer.write(new Gson().toJson(new Response("Something went wrong!")));
                }else {
                    writer.write(new Gson().toJson(new Response("Thank you for registration")));
                }
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
