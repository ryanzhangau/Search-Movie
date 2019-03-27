import React from "react";
import Button from "./Button";

const MovieCard = props => {
  const { movie, type } = props;
  const getButton = () => {
    if (type === "search")
      return (
        <Button movie={movie} label="Add to Watchlist" action="addMovie" />
      );
    return (
      <Button
        movie={movie}
        label="Remove From Watchlist"
        action="removeMovie"
      />
    );
  };
  return (
    <section className="movie-wrap">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      {getButton()}
    </section>
  );
};

export default MovieCard;
