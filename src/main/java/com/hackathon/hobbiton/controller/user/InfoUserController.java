package com.hackathon.hobbiton.controller.user;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.encrypt.JWTCreator;
import com.hackathon.hobbiton.entity.User;
import com.hackathon.hobbiton.json.JsonUtil;
import com.hackathon.hobbiton.json.entity.Response;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet(urlPatterns = {"/api/users/me", "/api/users/*", "/api/users"})
public class InfoUserController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) {
        String result ;

        if (req.getRequestURI().endsWith("/me")) {
            String token = req.getHeader("Authorization");
            User user = JWTCreator.decodeUser(token);
            result = DAO.getInstance().findUserById(user.getId());
        } else if (req.getRequestURI().endsWith("/users")) {
            List<User> list = DAO.getInstance().getAllUsers();
            result = new GsonBuilder().setDateFormat("yyyy-MM-dd").create().toJson(list);
        } else {
            String pathInfo = req.getPathInfo();
            String idString = pathInfo.replaceAll("/", "");
            int id = Integer.parseInt(idString.substring(1));
            result = DAO.getInstance().findUserById(id);
        }
        try {
            resp.getWriter().write(result);
        } catch (
                IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) {
        String token = req.getHeader("Authorization");
        User user = JWTCreator.decodeUser(token);
        String result = DAO.getInstance().deleteCurrentUser(user);
        Gson gson = new Gson();
        String s = gson.toJson(new Response(result));

        try {
            resp.getWriter().write(s);
        } catch (IOException e) {
            e.printStackTrace();
        }
//        int userId = (int) req.getSession().getAttribute("UserId");
//        String result = DAO.getInstance().deleteGoalsByUserId(userId);
//        String json = JsonUtil.messageResponseGsonCreator(result);
//        try {
//            resp.getWriter().write(json);
//        } catch (
//                IOException e) {
//            e.printStackTrace();
//        }
    }
}
