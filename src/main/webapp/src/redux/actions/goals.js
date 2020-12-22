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
	EDIT_GOAL_SUCCESS,
	UPDATE_GOAL_FAILURE,
	UPDATE_GOAL_SUCCESS
} from '../actionsTypes';
import dataService from '../../services/dataService';
import { setMessageAction } from './message';

export const getUserGoalsAction = () => {
	return dispatch => {
    dataService.getUsersGoals()
			.then(res => {
				dispatch(getUserGoalsSuccess(res.data));
      })
      .catch(err => {
				dispatch(getUserGoalFailure());
				dispatch(setMessageAction(err.message));
      });
  };
};

export const getGoalByIdAction = (id) => {
	return dispatch => {
    dataService.getGoalById(id)
			.then(res => {
				dispatch(getGoalByIdSuccess(res.data));
				dispatch(setMessageAction(res.message));
      })
      .catch(err => {
				dispatch(getGoalByIdFailure());
				dispatch(setMessageAction(err.message));
      });
  };
};

export const editGoalByIdAction = (id) => {
	return dispatch => {
    dataService.editGoal(id)
			.then(res => {
				dispatch(editGoalByIdSuccess(res.data));
				dispatch(setMessageAction(res.message));
      })
      .catch(err => {
				dispatch(editGoalByIdFailure());
				dispatch(setMessageAction(err.message));
      });
  };
};

export const updateGoalProgressByIdAction = (id, data) => {
	return dispatch => {
    dataService.editGoal(id, data)
			.then(res => {
				dispatch(updateGoalByIdSuccess(res.data));
				dispatch(setMessageAction(res.message));
      })
      .catch(err => {
				dispatch(updateGoalByIdFailure());
				dispatch(setMessageAction(err.message));
      });
  };
};

export const getDefaultGoalsAction = () => {
	return dispatch => {
    dataService.getDefaultGoals()
			.then(res => {
				dispatch(getDefaultGoalsSuccess(res.data));
				dispatch(setMessageAction(res.message));
      })
      .catch(err => {
				dispatch(getUserDefaultFailure());
				dispatch(setMessageAction(err.message));
      });
  };
};

export const getSeasonGoalsAction = () => {
	return dispatch => {
    dataService.getSeasonGoals()
			.then(res => {
				dispatch(getSeasonGoalsSuccess(res.data));
				dispatch(setMessageAction(res.message));
      })
      .catch(err => {
				dispatch(getUserSeasonFailure());
				dispatch(setMessageAction(err.message));
      });
  };
};

export const addGoalAction = (data) => {
	return dispatch => {
    dataService.postGoal(data)
			.then(res => {
				dispatch(addGoalSuccess(res.data));
				dispatch(setMessageAction(res.message));
      })
      .catch(err => {
				dispatch(addGoalFailure());
				dispatch(setMessageAction(err.message));
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

const editGoalByIdSuccess = (data) => ({
	type: EDIT_GOAL_SUCCESS,
	payload: {
		data
	}
});

const editGoalByIdFailure = () => ({
  type: EDIT_GOAL_FAILURE,
});

const updateGoalByIdSuccess = (data) => ({
	type: UPDATE_GOAL_SUCCESS,
	payload: {
		data
	}
});

const updateGoalByIdFailure = () => ({
  type: UPDATE_GOAL_FAILURE,
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

const addGoalSuccess = (data) => ({
	type: POST_GOALS_SUCCESS,
	payload: {
		data
	}
});

const addGoalFailure = () => ({
	type: POST_GOALS_FAILURE,
});