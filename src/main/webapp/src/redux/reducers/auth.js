import {
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,
	AUTH_REGISTER_SUCCESS,
	AUTH_REGISTER_FAILURE,
	LOGOUT
} from "../actionsTypes";

// const user = JSON.parse(localStorage.getItem("user"));
// const initialState = user
//   ? { isLoggedIn: true, user }
//   : { isLoggedIn: false, user: null };

const initialState = {
	isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
	const { type } = action;
  switch (type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
				isLoggedIn: true,
      };
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false
			};
		case AUTH_REGISTER_SUCCESS:
			return {
				...state,
				isLoggedIn: true
			};
		case AUTH_REGISTER_FAILURE:
			return {
				...state,
				isLoggedIn: false
			};
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
			};
    default:
      return state;
  }
}

export default authReducer;