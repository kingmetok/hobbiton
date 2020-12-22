import {
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
  EDIT_USER_INFO_FAILURE,
  EDIT_USER_INFO_SUCCESS,
  DELETE_USER_INFO_FAILURE,
  DELETE_USER_INFO_SUCCESS,
  GET_USER_INFO_BY_ID_SUCCESS,
  GET_USER_INFO_BY_ID_FAILURE,
  // GET_USER_ACHIEVEMENTS_SUCCESS,
  // GET_USER_ACHIEVEMENTS_FAILURE,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS__FAILURE,
  SUBSCRIBE_FOR_USER_SUCCESS,
  SUBSCRIBE_FOR_USER_FAILURE
} from '../actionsTypes';
import { userData } from '../../utils/userData';

const initialState = {
  userData: userData,
  profileData: null,
	usersDataBySearch: []
}

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        userData: payload.data
      };
    case GET_USER_INFO_FAILURE:
      return state;
    case EDIT_USER_INFO_SUCCESS:
      return {
        ...state,
        userData: payload.data
      };
    case EDIT_USER_INFO_FAILURE:
      return state;
    case DELETE_USER_INFO_SUCCESS:
      return {
        ...state,
        userData: userData
      };
    case DELETE_USER_INFO_FAILURE:
      return state;
		case GET_USER_INFO_BY_ID_SUCCESS:
      return {
        ...state,
        profileData: payload.data
      };
    case GET_USER_INFO_BY_ID_FAILURE:
      return state;
		case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        usersDataBySearch: payload.data
      };
    case SEARCH_USERS__FAILURE:
      return state;
    case SUBSCRIBE_FOR_USER_SUCCESS:
      return {
        ...state,
        userData: payload.data
			};
    case SUBSCRIBE_FOR_USER_FAILURE:
      return state;
    default:
      return state;
  }
}

export default userReducer;