import {
  FETCH_GENRE,
  FETCH_GENRE_ERROR,
  FETCH_GENRE_SUCCESS,
} from "../action/actionType";
const initialState = {
  loading: false,
  error: null,
  genres: [],
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRE:
      return { loading: true, error: null, genres: [] };
    case FETCH_GENRE_SUCCESS:
      return {
        loading: false,
        error: null,
        genres: action.payload,
      };
    case FETCH_GENRE_ERROR:
      return { loading: true, error: action.payload, genres: [] };
    default:
      return state;
  }
};

export default genreReducer;
