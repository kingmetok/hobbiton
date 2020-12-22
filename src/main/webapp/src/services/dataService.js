import axios from 'axios';
import authHeader from './authHeader';
import { GOALS_URL, USERS_URL } from '../utils/urls';

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


	 /**
 * @api {get} /api/goals Get user's Goals
 * @apiName GetGoals
 * @apiGroup Goals
 *
 * @apiHeader AuthHeader authorization jwt token.
 * 
 * @apiSuccessExample {json} Success-Response:
 * [{
 * 	"id": 1,
 * 	"title": "Goal",
 *	"description": "do goal",
 *	"achievements": ["image's path"],
 *	"completed": false,
 *	"dateCreated": "2020-12-20",
 *	"dateStarted": "2020-12-20",
 *	"progress": 2,
 *	"term": 90,
 *	"dateLastProof": "2020-12-22"
 * }]

 * @apiError {json} Error-Response: 
	{"message": "string"}
 */

 /**
 * @api {get} /api/goals/{id} Get user's Goal by id
 * @apiName GetUser
 * @apiGroup Users
 *
 * @apiParam id goal id
 *
 * @apiHeader AuthHeader authorization jwt token.
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 * 	"id": 1,
 * 	"title": "Goal",
 *	"description": "do goal",
 *	"achievements": ["image's path"],
 *	"completed": false,
 *	"dateCreated": "2020-12-20",
 *	"dateStarted": "2020-12-20",
 *	"progress": 2,
 *	"term": 90,
 *	"dateLastProof": "2020-12-22"
 * }
 *
 * @apiError {json} Error-Response: 
	{"message": "string"}
 */

  /**
 * @api {patch} /api/goals/{id} Update progress user's Goal by id
 * @apiName GetGoal
 * @apiGroup Goals
 *
 * @apiParam id goal id
 *
 * @apiHeader AuthHeader authorization jwt token.
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 * 	"id": 1,
 * 	"title": "Goal",
 *	"description": "do goal",
 *	"achievements": ["image's path"],
 *	"completed": false,
 *	"dateCreated": "2020-12-20",
 *	"dateStarted": "2020-12-20",
 *	"progress": 2,
 *	"term": 90,
 *	"dateLastProof": "2020-12-22"
 * }

 * @apiError {json} Error-Response: 
	{"message": "string"}
 */

  /**
 * @api {post} /api/goals Create goal
 * @apiName PostGoal
 * @apiGroup Goals
 * 
 * @apiParamExample {json} Information in body
 * {
 *  "tile": "Study",
 * 	"description": "do goal",
 * 	"dateStarted": "2020-12-22",
 * 	"term": 90
 * }
  * @apiParam id goal id
	* 
 * @apiHeader AuthHeader authorization jwt token.
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 * 	"id": 1,
 * 	"title": "Goal",
 *	"description": "do goal",
 *	"achievements": ["image's path"],
 *	"completed": false,
 *	"dateCreated":"Dec 22, 2020, 1:37:53 PM"
 *	"dateStarted":"Dec 22, 2020, 12:00:00 AM"
 *	"progress": 0,
 *	"term": 90,
 *	"dateLastProof": ""
 * }

 * @apiError {json} Error-Response: 
	{"message": "string"}
 */


 /**
 * @api {get} /users/me Get User information
 * @apiName GetUser
 * @apiGroup Users
 *
 * @apiParam  No parameters
 *
 * @apiHeader AuthHeader authorization jwt token.
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 * "id":1,
 * "login":"nick",
 * "email":"123@123.123",
 * "gender":"male",
 * "points":0,
 * "subscription":0,
 * "followers":0,
 * "achievements":[]
 * }

 * @apiError {json} Error-Response: 
	{"message": "string"}
 */

  /**
 * @api {get} /users/{id} Get User information by id
 * @apiName GetUserById
 * @apiGroup Users
 *
 * @apiParam  id user id
 *
 * @apiHeader AuthHeader authorization jwt token.
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 * "id":1,
 * "login":"nick",
 * "email":"123@123.123",
 * "gender":"male",
 * "points":0,
 * "subscription":0,
 * "followers":0,
 * "achievements":[]
 * }
 *
 * @apiError {json} Error-Response: 
	{"message": "string"}
 */

  /**
 * @api {delete} /users/me Delete User profile
 * @apiName DeleteUser
 * @apiGroup Users
 *
 * @apiParam  No parameters
 *
 * @apiHeader AuthHeader authorization jwt token.
 * 
 * @apiSuccess {json} Success-Response:
 * {"message": "string"}

 * @apiError {json} Error-Response: 
	{"message": "string"}
 */

  /**
 * @api {get} /users Get information about all users
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiParam  No parameters
 *
 * @apiHeader AuthHeader authorization jwt token.
 * 
 * @apiSuccessExample {json} Success-Response:
 * [{
 * "id":1,
 * "login":"nick",
 * "email":"123@123.123",
 * "gender":"male",
 * "points":0,
 * "subscription":0,
 * "followers":0,
 * "achievements":[]
 * }]

 * @apiError {json} Error-Response: 
	{"message": "string"}
 */