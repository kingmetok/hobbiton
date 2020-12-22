import axios from "axios";
import { LOGIN_URL, REGISTER_URL } from '../utils/urls';
const header = {'Content-Type': 'application/json'};

const authService = {
	login: (data) => {
		return axios.post(LOGIN_URL, data, {header: header});
	},
	register: (data) => {
		return axios.post(REGISTER_URL,data,{header: header});
	},
	logout: () => {
		localStorage.removeItem("jwt");
  }
}

export default authService;

/**
 * @api {post} /api/auth/registration Register new user
 * @apiName PostAuth
 * @apiGroup Auth
 *
 * @apiParamExample {json} Information in body
 * { 
 * "login": "Developer" , 
 * "email":"developer@com.ua", 
 * "gender": "male",
 *  "password": "password" 
 * }
 * 
 * @apiSuccess {json} Success-Response:
 * { "message": "string" }

 * @apiError {json} Error-Response: 
	{"message": "string"}
 */

 /**
 * @api {post} /api/auth/login Login into system
 * @apiName PostAuth
 * @apiGroup Auth
 *
 * @apiParamExample {json} Information in body
 * { 
 * "login": "Developer" ,
 *  "password": "password"
 * }
 * 
 * @apiSuccess {json} Success-Response:
 * { "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVl CJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.yRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw" }
 *
 * @apiError {json} Error-Response: 
	{"message": "string"}
 */