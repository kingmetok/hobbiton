package com.hackathon.hobbiton.controller.authorization;

import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.encrypt.JWTCreator;
import com.hackathon.hobbiton.entity.User;
import com.hackathon.hobbiton.json.JsonUtil;

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
                request.getSession().setAttribute("UserId",user.getId());

                if (result.equals("success")) {
                    json = JsonUtil.jwtResponseGsonCreator(JWTCreator.create(user));
                } else {
                    json = JsonUtil.messageResponseGsonCreator(result);
                }

            } else {
                result = DAO.getInstance().registration(user);
                json = JsonUtil.messageResponseGsonCreator(result);
            }

            writer.write(json);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
