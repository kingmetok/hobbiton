package com.hackathon.hobbiton.controller.goals;

import com.google.gson.Gson;
import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.encrypt.JWTCreator;
import com.hackathon.hobbiton.entity.Goal;
import com.hackathon.hobbiton.entity.User;
import com.hackathon.hobbiton.json.JsonUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

@WebServlet(urlPatterns = {"/api/goals/*", "/api/goals"})
public class GoalServlet extends PatchServlet {


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String pathInfo = request.getPathInfo();
        String idString = pathInfo.replaceAll("/", "");
        if (!idString.equalsIgnoreCase("")) {
            int id = Integer.parseInt(idString);
            Goal result = DAO.getInstance().findGoalById(id);
            String json = new Gson().toJson(result);
            try {
                response.getWriter().write(json);
            } catch (
                    IOException e) {
                e.printStackTrace();
            }
        } else doPost(request, response);
    }


    @Override
    protected void doPatch(HttpServletRequest req, HttpServletResponse resp) {
        String pathInfo = req.getPathInfo();
        String idString = pathInfo.replaceAll("/", "");
        int id = Integer.parseInt(idString);
        String result = DAO.getInstance().incrementProgress(id);
        if (result.equalsIgnoreCase("success")) {
            Goal goalById = DAO.getInstance().findGoalById(id);
            String json = new Gson().toJson(goalById);
            try {
                resp.getWriter().write(json);
            } catch (
                    IOException e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {

        String token = req.getHeader("Authorization");
        System.out.println(token);

        BufferedReader reader = req.getReader();
        Goal goal = JsonUtil.createGoal(reader);
        User user = JWTCreator.decodeUser(token);

        String result = DAO.getInstance().createGoal(goal, user.getId());
        if (result.equalsIgnoreCase("success")) {
            String json = new Gson().toJson(goal);
            try {
                resp.getWriter().write(json);
            } catch (
                    IOException e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) {
        String pathInfo = req.getPathInfo();
        String idString = pathInfo.replaceAll("/", "");
        int id = Integer.parseInt(idString);
        String result = DAO.getInstance().deleteGoalByID(id);
        String json = new Gson().toJson(result);
        try {
            resp.getWriter().write(json);
        } catch (
                IOException e) {
            e.printStackTrace();
        }
    }
}
