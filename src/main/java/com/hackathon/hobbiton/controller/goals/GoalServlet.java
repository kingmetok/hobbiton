package com.hackathon.hobbiton.controller.goals;

import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.entity.Goal;
import com.hackathon.hobbiton.entity.User;
import com.hackathon.hobbiton.json.JsonUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

@WebServlet("/api/account/goals/*")
public class GoalServlet extends PatchServlet {


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String pathInfo = request.getPathInfo();
        String idString= pathInfo.replaceAll("/", "");
        if (!idString.equalsIgnoreCase("")){
        Long id = Long.valueOf(idString);
        String result = DAO.getInstance().findGoalsByUserId(id);
        //String json = JsonUtil.messageResponseGsonCreator(result);
        try {
            response.getWriter().write(result);
        } catch (
                IOException e) {
            e.printStackTrace();
        }
        }
        else doPost(request,response);
    }


    @Override
    protected void doPatch(HttpServletRequest req, HttpServletResponse resp) {
        String pathInfo = req.getPathInfo();
        String idString= pathInfo.replaceAll("/", "");
        Long id = Long.valueOf(idString);
        String result = DAO.getInstance().incrementProgress(id);
        String json = JsonUtil.messageResponseGsonCreator(result);
        try {
            resp.getWriter().write(json);
        } catch (
                IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        Long userId = (Long) req.getSession().getAttribute("UserId");
        System.out.println(userId);
        BufferedReader reader = req.getReader();
        Goal goal = JsonUtil.createGoal(reader);
        String result = DAO.getInstance().createGoal(goal,userId);
        String json = JsonUtil.messageResponseGsonCreator(result);
        try {
            resp.getWriter().write(json);
        } catch (
                IOException e) {
            e.printStackTrace();
        }
    }
}
