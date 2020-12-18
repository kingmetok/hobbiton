import axios from "axios";
import { LOGIN_URL, REGISTER_URL } from '../helpers/urls';
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