import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWatchlist } from "../store/actions/movieActions";
import MovieCard from "../components/MovieCard";

class WatchList extends Component {
  componentDidMount() {
    this.props.fetchWatchlist();
  }
  render() {
    return (
      <div className="movie-list">
        {this.props.movieReducer.watchlist.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} type="remove" />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movieReducer: state.movieReducer
  };
};
const mapDispatchToProps = {
  fetchWatchlist
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchList);
