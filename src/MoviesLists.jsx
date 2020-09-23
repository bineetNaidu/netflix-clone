import React from "react";
import Movie from "./Movie";
import { withStyles } from "@material-ui/styles";
import FlipMove from "react-flip-move";

// Statics
import styles from "./customs/styles/MoviesListsStyles";

function MoviesLists({ movies, label, classes, highlights }) {
  const imgUrls = `https://image.tmdb.org/t/p/original`;
  return (
    <div className={classes.root}>
      <h1>{label}</h1>
      <FlipMove className={classes.main}>
        {movies.map(
          (movie) =>
            movie.backdrop_path !== (null || undefined) && (
              <Movie
                src={`${imgUrls}${movie.backdrop_path || movie.poster_path}`}
                txt={movie.name}
                key={movie.id}
                highlights={highlights}
              />
            )
        )}
      </FlipMove>
    </div>
  );
}

export default withStyles(styles)(MoviesLists);
