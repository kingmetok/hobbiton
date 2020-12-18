import authService from '../../services/authService';
import { setMessage } from './message';
import {
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,
	AUTH_REGISTER_SUCCESS,
	AUTH_REGISTER_FAILURE,
	LOGOUT
} from "../actionsTypes";

export const authLoginAction = ({ login, password }) => {
  return dispatch => {
    authService.login(login, password)
      .then(res => {
				dispatch(authLoginSuccess());
				dispatch(setMessage(res.message));
      })
      .catch(err => {
				dispatch(authLoginFailure());
				dispatch(setMessage(err.message));
      });
  };
};

export const authRegisterAction = ({ login, password, email, sex }) => {
  return dispatch => {
		authService.register(login, password, email, sex)
      .then(res => {
				dispatch(authRegisterSuccess());
				dispatch(setMessage(res.message));
      })
      .catch(err => {
				dispatch(authRegisterFailure());
				dispatch(setMessage(err.message));
      });
  };
};

export const logout = () => (dispatch) => {
  authService.logout();
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