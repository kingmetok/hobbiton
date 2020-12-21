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

const initialState = {
	goalsList: [],
	goalByIdData: {},
	seasonGoals: [],
	defaultGoals: [],
}

const goalsReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_GOALS_SUCCESS:
			return {
				...state,
				goalsList: payload.data
			};
		case GET_GOALS_FAILURE:
			return state;
		case GET_DEFAULT_GOALS_SUCCESS:
			return {
				...state,
				defaultGoals: payload.data
			};
		case GET_DEFAULT_GOALS_FAILURE:
			return state;
		case GET_GOAL_BY_ID_SUCCESS:
			return {
				...state,
				goalByIdData: payload.data
			};
		case GET_GOAL_BY_ID_FAILURE:
			return state;
		case POST_GOALS_SUCCESS:
			return {
				...state,
				goalsList: [...state.goalsList, payload.data]
			};
		case POST_GOALS_FAILURE:
			return state;
		case GET_SEASON_GOALS_SUCCESS:
			return {
				...state,
				seasonGoals: payload.data
			};
		case GET_SEASON_GOALS_FAILURE:
			return state;
		case EDIT_GOAL_SUCCESS:
			return {
				...state,
				goalByIdData: payload.data,
				goalsList: [...state.goalsList.filter(({id}) => payload.data.id != id), payload.data ]
      };
    case EDIT_GOAL_FAILURE:
      return state;
    default:
      return state;
  }
}

export default goalsReducer;
