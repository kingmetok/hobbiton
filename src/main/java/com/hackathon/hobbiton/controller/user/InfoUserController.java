package com.hackathon.hobbiton.controller.user;

import com.hackathon.hobbiton.database.DAO;
import com.hackathon.hobbiton.json.JsonUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(urlPatterns = {"/api/users/me","/api/users/*"})
public class InfoUserController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)  {
        String result="error";
        if (req.getRequestURI().endsWith("/me")) {
            Long userId = (Long) req.getSession().getAttribute("UserId");
             result = DAO.getInstance().findUserById(userId);
        }
        else {
            String pathInfo = req.getPathInfo();
            String idString= pathInfo.replaceAll("/", "");
            Long id = Long.valueOf(idString);
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
        Long userId = (Long) req.getSession().getAttribute("UserId");
        String result = DAO.getInstance().deleteGoalsByUserId(userId);
        String json = JsonUtil.messageResponseGsonCreator(result);
        try {
            resp.getWriter().write(result);
        } catch (
                IOException e) {
            e.printStackTrace();
        }
    }
}
