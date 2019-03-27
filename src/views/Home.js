import React, { Component } from "react";
import Search from "../components/Search";
import { searchMovie } from "../store/actions/movieActions";
import { connect } from "react-redux";
import MovieCard from "../components/MovieCard";

class Home extends Component {
  render() {
    return (
      <div>
        <Search />
        <div className="movie-list">
          {this.props.movieReducer.movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} type="search" />
          ))}
        </div>
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
  searchMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
