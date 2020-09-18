import React from "react";
import Movie from "./Movie";
import { withStyles } from "@material-ui/styles";
// import classes from "*.module.css";

const styles = {
  root: { marginLeft: "20px", color: "#fff" },
  main: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    padding: "20px",
  },
};

function MoviesLists({ movies, label, classes, highlights }) {
  const imgUrls = `https://image.tmdb.org/t/p/original`;
  return (
    <div className={classes.root}>
      <h1>{label}</h1>
      <div className={classes.main}>
        {movies.map((movie) => (
          <Movie
            src={`${imgUrls}${movie.backdrop_path}`}
            txt={movie.name}
            key={movie.id}
            highlights={highlights}
          />
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(MoviesLists);
