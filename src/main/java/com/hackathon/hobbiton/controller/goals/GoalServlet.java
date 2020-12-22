package com.hackathon.hobbiton.controller.goals;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.encrypt.JWTCreator;
import com.hackathon.hobbiton.entity.Goal;
import com.hackathon.hobbiton.entity.User;
import com.hackathon.hobbiton.json.JsonUtil;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;

@WebServlet(urlPatterns = {"/api/goals/*", "/api/goals"})//попробовать оставить только /api/goals/*
public class GoalServlet extends PatchServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) {

        String pathInfo = request.getPathInfo();
        String token = request.getHeader("Authorization");

        User user = JWTCreator.decodeUser(token);
        int userId = user.getId();

        if (pathInfo == null) {

            List<Goal> result = DAO.getInstance().findGoalByUserId(userId);

            String json = new GsonBuilder().setDateFormat("yyyy-MM-dd").create().toJson(result);
            try {
                response.getWriter().write(json);
            } catch (
                    IOException e) {
                e.printStackTrace();
            }
        } else {
            String idString = pathInfo.replaceAll("/", "");
            int goalId = Integer.parseInt(idString.substring(1));
            Goal goal = DAO.getInstance().findGoalById(goalId);
            String json = new GsonBuilder().setDateFormat("yyyy-MM-dd").create().toJson(goal);

            try {
                response.getWriter().write(json);
            } catch (
                    IOException e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    protected void doPatch(HttpServletRequest req, HttpServletResponse resp) {
        String pathInfo = req.getPathInfo();
        String idString = pathInfo.replaceAll("/", "");

        int id = Integer.parseInt(idString.substring(1));

        boolean result = DAO.getInstance().incrementProgress(id);

        if (result) {
            Goal goalById = DAO.getInstance().findGoalById(id);

            String json = new GsonBuilder().setDateFormat("yyyy-MM-dd").create().toJson(goalById);

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

        User user = JWTCreator.decodeUser(token);

        BufferedReader reader = req.getReader();
        Goal goal = JsonUtil.createGoal(reader);

        String result = DAO.getInstance().createGoal(goal, user.getId());

        if (result.equalsIgnoreCase("success")) {
            String json = new Gson().toJson(goal);
            try {
                resp.getWriter().write(json);
            } catch (
                    IOException e) {
                e.printStackTrace();
            }
        } else resp.getWriter().write("error");
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) {
        String pathInfo = req.getPathInfo();
        String idString = pathInfo.replaceAll("/", "");
        int id = Integer.parseInt(idString.substring(1));
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
