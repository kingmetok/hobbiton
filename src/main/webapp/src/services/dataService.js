import axios from 'axios';
import authHeader from './authHeader';
import { GOALS_URL, USERS_URL } from '../utils/urls';
/**
 * @api {get} /users/me Request User information
 * @apiName GetUser
 * @apiGroup Users
 *
 * @apiParam  No parameters
 *
 * @apiHeader [{type}]
 * 
 * 
 * @apiSuccess {String} login email gender of the User.
 * @apiError {String} 
 */

const userService = {
  getUsersGoals: () => {
    return axios.get(GOALS_URL, { headers: authHeader() });
	},
	getDefaultGoals: () => {
		return axios.get(GOALS_URL + `/default`, { headers: authHeader() });
	},
	getSeasonGoals: () => {
		return axios.get(GOALS_URL + `/season`, { headers: authHeader() });
	},
  getGoalById: (id) => {
    return axios.get(GOALS_URL + `/:${id}`, { headers: authHeader() });
	},
	editGoal: (id) => {
    return axios.patch(GOALS_URL + `/:${id}`, { headers: authHeader() });
	},
	updateGoal: (id, data) => {
    return axios.patch(GOALS_URL + `/:${id}`,data, { headers: authHeader() });
	},
	postGoal: (data) => {
    return axios.post(GOALS_URL, data, { headers: authHeader() });
  },
	getUser: () => {
    return axios.get(USERS_URL + `/me`, { headers: authHeader() });
	},
	getUserInfoById: (id) => {
    return axios.get(USERS_URL + `/:${id}`, { headers: authHeader() });
	},
	editUser: (data) => {
    return axios.patch(USERS_URL + `/me`, data, { headers: authHeader() });
	},
	deleteUser: () => {
    return axios.delete(USERS_URL + `/me`, { headers: authHeader() });
	},
	subscribeUser: (param) => {
    return axios.patch(USERS_URL + `/subscribe/`,param, { headers: authHeader() });
	},
	searchUsers: (params) => {
    return axios.get(USERS_URL , params, { headers: authHeader() });
	},
	getUserAchievements: () => {
    return axios.get(USERS_URL + `/me`, { headers: authHeader() });
	},
	
}

export default userService;