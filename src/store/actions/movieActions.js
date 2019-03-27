import axios from "axios";
import { watch } from "chokidar";
require("dotenv").config();

const APIKey = process.env.APIKey;
const watchlist = localStorage.getItem("watchlist") || "[]";

export const searchMovie = query => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${query}`)
    .then(res => {
      dispatch({
        type: "SEARCH_MOIVE",
        payload: res.data
      });
    });
};

export const fetchWatchlist = () => dispatch => {
  dispatch({
    type: "FETCH_MOIVE",
    payload: JSON.parse(watchlist)
  });
};

export const addMovie = movie => dispatch => {
  const m = JSON.parse(watchlist).filter(m => m.imdbID === movie.imdbID);
  if (m.length === 0)
    dispatch({
      type: "ADD_MOIVE",
      payload: movie
    });
};

export const removeMoive = movie => dispatch => {
  const movies = JSON.parse(watchlist).map(m => m.imdbID !== movie.imdbID);
  dispatch({
    type: "REMOVE_MOIVE",
    payload: movies
  });
};
