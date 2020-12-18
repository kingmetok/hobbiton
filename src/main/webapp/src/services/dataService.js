import axios from 'axios';
import authHeader from './authHeader';
import { GOALS_URL } from '../helpers/urls';


const userService = {
  getUsersGoals: () => {
    return axios.get(GOALS_URL, { headers: authHeader() });
  },
  getGoalById: (id) => {
    return axios.get(GOALS_URL + `/:${id}`, { headers: authHeader() });
  }
}

export default userService;