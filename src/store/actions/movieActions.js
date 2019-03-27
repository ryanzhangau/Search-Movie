import axios from "axios";

const getWatchlist = () =>
  JSON.parse(localStorage.getItem("watchlist") || "[]");

const API_KEY = "31169fa";

export const searchMovie = query => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    .then(res => {
      dispatch({
        type: "SEARCH_MOVIE",
        payload: res.data.Search
      });
    });
};

export const fetchWatchlist = () => dispatch => {
  const watchlsit = getWatchlist();
  dispatch({ type: "FETCH_WATCHLIST", payload: watchlsit });
};

export const addMovie = movie => dispatch => {
  const watchlist = getWatchlist();
  const m = watchlist.filter(m => m.imdbID === movie.imdbID);
  if (m.length === 0) {
    localStorage.setItem("watchlist", JSON.stringify([...watchlist, movie]));
    dispatch({
      type: "ADD_MOVIE",
      payload: movie
    });
  }
};

export const removeMovie = movie => dispatch => {
  const movies = getWatchlist().filter(m => m.imdbID !== movie.imdbID);
  localStorage.setItem("watchlist", JSON.stringify(movies));
  dispatch({
    type: "REMOVE_MOVIE",
    payload: movies
  });
};
