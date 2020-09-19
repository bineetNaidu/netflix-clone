import React from "react";

import { withStyles } from "@material-ui/styles";

// statics
import styles from "./customs/styles/BannerStyles";

function Banner({ movies, classes }) {
  console.log(movies, movies[12]);
  return (
    <header
      className={classes.root}
      style={{
        backgroundImage:
          'url("https://image.tmdb.org/t/p/original//7iBs4QZXYDwQt5Cf0mhrOWKbYFT.jpg")',
      }}
    >
      <div className={classes.content}>
        <h1 className={classes.title}>The Great Heist</h1>
        <div>
          <button className={classes.btns}>Play</button>
          <button className={classes.btns}>My List</button>
        </div>
        <h1 className={classes.desc}>
          Based on the 1994 robbery of US$33 million from Colombia's central
          bank, which turned the country upside down.
        </h1>
      </div>
      <div className={classes.fadeBottom}></div>
    </header>
  );
}

export default withStyles(styles)(Banner);
