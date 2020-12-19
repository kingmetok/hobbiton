import {
	GET_GOALS_SUCCESS,
	GET_GOALS_FAILURE,
	GET_DEFAULT_GOALS_SUCCESS,
	GET_DEFAULT_GOALS_FAILURE,
	GET_GOAL_BY_ID_SUCCESS,
	GET_GOAL_BY_ID_FAILURE,
	POST_GOALS_SUCCESS,
	POST_GOALS_FAILURE,
	GET_SEASON_GOALS_SUCCESS,
	GET_SEASON_GOALS_FAILURE,
	EDIT_GOAL_FAILURE,
	EDIT_GOAL_SUCCESS
} from '../actionsTypes';
import dataService from '../../services/dataService';
import { setMessage } from './message';

export const getUserGoalsAction = () => {
	return dispatch => {
    dataService.getUsersGoals()
			.then(res => {
				dispatch(getUserGoalsSuccess(res.data));
      })
      .catch(err => {
				dispatch(getUserGoalFailure());
				dispatch(setMessage(err.message));
      });
  };
};

export const getGoalByIdAction = (id) => {
	return dispatch => {
    dataService.getGoalById(id)
			.then(res => {
				dispatch(getGoalByIdSuccess(res.data));
				dispatch(setMessage(res.message));
      })
      .catch(err => {
				dispatch(getGoalByIdFailure());
				dispatch(setMessage(err.message));
      });
  };
};

export const editGoalByIdAction = (data, id) => {
	return dispatch => {
    dataService.editGoal(data, id)
			.then(res => {
				dispatch(editGoalByIdSuccess(res.data));
				dispatch(setMessage(res.message));
      })
      .catch(err => {
				dispatch(editGoalByIdFailure());
				dispatch(setMessage(err.message));
      });
  };
};

export const getDefaultGoalsAction = () => {
	return dispatch => {
    dataService.getDefaultGoals()
			.then(res => {
				dispatch(getDefaultGoalsSuccess(res.data));
				dispatch(setMessage(res.message));
      })
      .catch(err => {
				dispatch(getUserDefaultFailure());
				dispatch(setMessage(err.message));
      });
  };
};

export const getSeasonGoalsAction = () => {
	return dispatch => {
    dataService.getSeasonGoals()
			.then(res => {
				dispatch(getSeasonGoalsSuccess(res.data));
				dispatch(setMessage(res.message));
      })
      .catch(err => {
				dispatch(getUserSeasonFailure());
				dispatch(setMessage(err.message));
      });
  };
};

export const addGoalAction = (data) => {
	return dispatch => {
    dataService.postGoal(data)
			.then(res => {
				dispatch(addGoalSuccess(res.data));
				dispatch(setMessage(res.message));
      })
      .catch(err => {
				dispatch(addGoalFailure());
				dispatch(setMessage(err.message));
      });
  };
};


const getUserGoalsSuccess = (data) => ({
	type: GET_GOALS_SUCCESS,
	payload: {
		data
	}
});

const getUserGoalFailure = () => ({
  type: GET_GOALS_FAILURE,
});

const getGoalByIdSuccess = (data) => ({
	type: GET_GOAL_BY_ID_SUCCESS,
	payload: {
		data
	}
});

const getGoalByIdFailure = () => ({
  type: GET_GOAL_BY_ID_FAILURE,
});

const editGoalByIdSuccess = () => ({
	type: EDIT_GOAL_FAILURE,
	payload: {
		data
	}
});

const editGoalByIdFailure = () => ({
  type: EDIT_GOAL_SUCCESS,
});

const getDefaultGoalsSuccess = (data) => ({
	type: GET_DEFAULT_GOALS_SUCCESS,
	payload: {
		data
	}
});

const getUserDefaultFailure = () => ({
  type: GET_DEFAULT_GOALS_FAILURE,
});

const getSeasonGoalsSuccess = (data) => ({
	type: GET_SEASON_GOALS_SUCCESS,
	payload: {
		data
	}
});

const getUserSeasonFailure = () => ({
	type: GET_SEASON_GOALS_FAILURE,
});

const addGoalSuccess = () => ({
	type: POST_GOALS_SUCCESS,
	payload: {
		data
	}
});

const addGoalFailure = () => ({
	type: POST_GOALS_FAILURE,
});