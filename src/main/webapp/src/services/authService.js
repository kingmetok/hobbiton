import axios from "axios";
import { LOGIN_URL, REGISTER_URL, LOGOUT } from '../helpers/urls';

const authService = {
	login: (login, password) => {
		return axios.post(LOGIN_URL, { login, password });
	},
	register: (login, email, password, sex) => {
    return axios.post(REGISTER_URL, {
      login,
      email,
			password,
			sex
    });
	},
	logout: () => {
		return axios.get(LOGOUT);
  }
}

export default authService;