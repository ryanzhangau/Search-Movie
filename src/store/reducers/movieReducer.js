const initState = {
  moives: [],
  watchlist: []
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_MOVIE":
      return {
        ...state,
        movies: action.payload
      };
    case "FETCH_WATCHLIST":
      return {
        ...state,
        watchlist: action.payload
      };
    case "ADD_MOVIE":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload]
      };
    case "REMOVE_MOVIE":
      return {
        ...state,
        watchlist: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
