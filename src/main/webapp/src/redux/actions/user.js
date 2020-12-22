import {
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
  EDIT_USER_INFO_FAILURE,
  EDIT_USER_INFO_SUCCESS,
  DELETE_USER_INFO_FAILURE,
  DELETE_USER_INFO_SUCCESS,
  GET_USER_INFO_BY_ID_SUCCESS,
  GET_USER_INFO_BY_ID_FAILURE,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS__FAILURE,
  SUBSCRIBE_FOR_USER_SUCCESS,
  SUBSCRIBE_FOR_USER_FAILURE,
} from '../actionsTypes';
import dataService from '../../services/dataService';
import { setMessageAction } from './message';

export const getUsersInfoAction = () => {
  return (dispatch) => {
    dataService
      .getUser()
      .then((res) => {
        dispatch(getUsersInfoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUsersInfoFailure());
        dispatch(setMessageAction(err.message));
      });
  };
};

export const editUsersInfoAction = (data) => {
  return (dispatch) => {
    dataService
      .editUser(data)
      .then((res) => {
        dispatch(editUsersInfoSuccess(res.data));
        dispatch(setMessageAction(res.message));
      })
      .catch((err) => {
        dispatch(editUsersInfoFailure());
        dispatch(setMessageAction(err.message));
      });
  };
};

export const deleteUsersInfoAction = () => {
  return (dispatch) => {
    dataService
      .deleteUser()
      .then((res) => {
        dispatch(deleteUsersInfoSuccess());
        dispatch(setMessageAction(res.message));
      })
      .catch((err) => {
        dispatch(deleteUsersInfoFailure());
        dispatch(setMessageAction(err.message));
      });
  };
};

export const getUserByIdAction = (id) => {
  return (dispatch) => {
    dataService
      .getUserInfoById(id)
      .then((res) => {
        dispatch(getUserInfoByIdSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUserInfoByIdFailure());
        dispatch(setMessageAction(err.message));
      });
  };
};

export const searchUsersAction = (param) => {
  return (dispatch) => {
    dataService
      .searchUsers(param)
      .then((res) => {
        dispatch(searchUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(searchUsersFailure());
        dispatch(setMessageAction(err.message));
      });
  };
};

export const subscribeForUserAction = (params) => {
  return (dispatch) => {
    dataService
      .subscribeUser(params)
      .then((res) => {
        dispatch(subscribeForUserSuccess(res.data));
        dispatch(setMessageAction(res.message));
      })
      .catch((err) => {
        dispatch(subscribeForUserFailure());
        dispatch(setMessageAction(err.message));
      });
  };
};

const getUsersInfoSuccess = (data) => ({
  type: GET_USER_INFO_SUCCESS,
  payload: {
    data,
  },
});

const getUsersInfoFailure = () => ({
  type: GET_USER_INFO_FAILURE,
});

const editUsersInfoSuccess = (data) => ({
  type: EDIT_USER_INFO_FAILURE,
  payload: {
    data,
  },
});

const editUsersInfoFailure = () => ({
  type: EDIT_USER_INFO_SUCCESS,
});

const deleteUsersInfoSuccess = () => ({
  type: DELETE_USER_INFO_FAILURE,
});

const deleteUsersInfoFailure = () => ({
  type: DELETE_USER_INFO_SUCCESS,
});

const getUserInfoByIdSuccess = (data) => ({
  type: GET_USER_INFO_BY_ID_SUCCESS,
  payload: {
    data,
  },
});

const getUserInfoByIdFailure = () => ({
  type: GET_USER_INFO_BY_ID_FAILURE,
});

const searchUsersSuccess = (data) => ({
  type: SEARCH_USERS_SUCCESS,
  payload: {
    data,
  },
});

const searchUsersFailure = () => ({
  type: SEARCH_USERS__FAILURE,
});

const subscribeForUserSuccess = (data) => ({
  type: SUBSCRIBE_FOR_USER_SUCCESS,
  payload: {
    data,
  },
});

const subscribeForUserFailure = () => ({
  type: SUBSCRIBE_FOR_USER_FAILURE,
});
