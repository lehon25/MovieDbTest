import { combineReducers } from "redux";
import genreReducer from "./genreReducer";
import moviesReducer from "./movieReduces";

const reducers = combineReducers({
  genres: genreReducer,
  movies: moviesReducer,
});

export default reducers;
