import axios from 'axios';
import authHeader from './authHeader';
import { GOALS_URL } from '../helpers/urls';

const API_URL = 'http://localhost:8080/api/test/';

const userService = {
  getUsersGoals: () => {
    return axios.get(GOALS_URL);
  },
  getGoalById: (id) => {
    return axios.get(GOAL_URL + `/:${id}`);
  }
}

export default userService;