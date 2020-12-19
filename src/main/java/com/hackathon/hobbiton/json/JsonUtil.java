package com.hackathon.hobbiton.json;

import com.google.gson.Gson;
import com.hackathon.hobbiton.entity.Goal;
import com.hackathon.hobbiton.entity.User;
import com.hackathon.hobbiton.json.entity.Response;

import java.io.BufferedReader;
import java.io.IOException;

public class JsonUtil {

    private JsonUtil() {
    }

    public static String jsonMapper(BufferedReader reader) {
        StringBuilder sb = new StringBuilder();
        try {
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line).append('\n');
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return sb.toString();
    }

    public static User createUser(BufferedReader reader) {
        Gson gson = new Gson();
        return gson.fromJson(jsonMapper(reader), User.class);
    }

    public static String messageResponseGsonCreator(String message) {
        Gson gson = new Gson();
        Response resp = new Response(message);
        return gson.toJson(resp);
    }

    public static Goal createGoal(BufferedReader reader){
        Gson gson = new Gson();
        return gson.fromJson(jsonMapper(reader), Goal.class);
    }
}
