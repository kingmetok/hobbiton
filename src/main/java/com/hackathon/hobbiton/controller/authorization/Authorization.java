package com.hackathon.hobbiton.controller.authorization;

import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.entity.User;
import com.hackathon.hobbiton.json.JsonUtil;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

@WebServlet(urlPatterns = {"/registration", "/login"})
public class Authorization extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {

        try {
//            BufferedReader reader = request.getReader();
//            User user = JsonUtil.createUser(reader);
//
//            String result;
//
//            if (request.getRequestURI().endsWith("/login")) {
//                result = DAO.getInstance().login(user);
//            } else {
//                result = DAO.getInstance().registration(user);
//            }
//
//            String json = JsonUtil.messageResponseGsonCreator(result);
//
//            response.getWriter().write(json);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
