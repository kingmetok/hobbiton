package com.hackathon.hobbiton.controller.goals;

import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.json.JsonUtil;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/api/account/goals/*")
public class GoalsServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) {
        String pathInfo = request.getPathInfo();
        String idString= pathInfo.replaceAll("/", "");
        Long id = Long.valueOf(idString);
        String result = DAO.getInstance().findGoalsByUserId(id);
        String json = JsonUtil.messageResponseGsonCreator(result);
        try {
            response.getWriter().write(json);
        } catch (
                IOException e) {
            e.printStackTrace();
        }
    }
}
