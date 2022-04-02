import {
  FETCH_MOVIES,
  FETCH_MOVIES_BY_ID,
  FETCH_MOVIES_SUCCESS,
} from "../action/actionType";
const initialState = {
  loading: false,
  error: null,
  movies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { loading: true, error: null, movies: [] };
    case FETCH_MOVIES_SUCCESS:
      return {
        loading: false,
        error: null,
        movies: action.payload,
      };
    case FETCH_MOVIES_BY_ID:
      return {
        ...state,
        movieDetails: { ...action.payload },
      };
    default:
      return state;
  }
};

export default moviesReducer;
