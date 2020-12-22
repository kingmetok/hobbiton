import authService from '../../services/authService';
import { setMessageAction } from './message';
import {
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,
	AUTH_REGISTER_SUCCESS,
	AUTH_REGISTER_FAILURE,
	LOGOUT
} from "../actionsTypes";

export const authLoginAction = (data) => {
	return dispatch => {
    authService.login(data)
			.then(res => {
				const jwt = res.data.jwt;
				if (jwt) {
					localStorage.setItem("jwt", JSON.stringify(jwt));
				}
				dispatch(authLoginSuccess());
				dispatch(setMessageAction(res.message));
      })
      .catch(err => {
				dispatch(authLoginFailure());
				dispatch(setMessageAction(err.response.data.message));
      });
  };
};

export const authRegisterAction = (data) => {
  return dispatch => {
		authService.register(data)
			.then(res => {
				console.log(res);
				dispatch(authRegisterSuccess());
				dispatch(setMessageAction(res.message));
      })
      .catch(err => {
				dispatch(authRegisterFailure());
				console.log(err.response.data);
				dispatch(setMessageAction(err.response.data.message));
      });
  };
};

export const logoutAction = () => (dispatch) => {
	authService.logout()
  dispatch(authLogout());
};

const authLoginSuccess = () => ({
  type: AUTH_LOGIN_SUCCESS,
});


const authLoginFailure = () => ({
  type: AUTH_LOGIN_FAILURE,
});

const authRegisterSuccess = () => ({
  type: AUTH_REGISTER_SUCCESS,
});

const authRegisterFailure = () => ({
  type: AUTH_REGISTER_FAILURE,
});

const authLogout = () => ({
  type: LOGOUT,
});