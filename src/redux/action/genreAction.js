import axios from "axios";
import {
  API_KEY,
  FETCH_GENRE,
  BASE_URL,
  FETCH_GENRE_SUCCESS,
  FETCH_GENRE_ERROR,
} from "./actionType";

export const genreMovies = (text) => async (dispatch) => {
  dispatch({
    type: FETCH_GENRE,
  });

  try {
    const { data } = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: `${API_KEY}`,
      },
    });

    dispatch({
      type: FETCH_GENRE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_GENRE_ERROR,
      payload: err.message,
    });
  }
};
