import axios from "axios";
import {
  API_KEY,
  BASE_URL,
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_GENRE_ERROR,
  FETCH_MOVIES_BY_ID,
} from "./actionType";

export const getMovies = (text) => async (dispatch) => {
  dispatch({
    type: FETCH_MOVIES,
  });

  try {
    const { data } = await axios.get(`${BASE_URL}/movie/upcoming`, {
      params: {
        api_key: `${API_KEY}`,
      },
    });

    dispatch({
      type: FETCH_MOVIES_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_GENRE_ERROR,
      payload: err.message,
    });
  }
};
export const getMoviesById = (text) => async (dispatch) => {
  dispatch({
    type: FETCH_MOVIES,
  });

  try {
    const { data } = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: `${API_KEY}`,
      },
    });

    dispatch({
      type: FETCH_MOVIES_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_GENRE_ERROR,
      payload: err.message,
    });
  }
};
