import React, { useEffect, useState } from "react";
import { getApiData } from "./helpers";
import { withStyles } from "@material-ui/styles";

// statics
import styles from "./customs/styles/BannerStyles";

function Banner({ classes, link }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const data = async () => {
      const res = await getApiData(`http://api.themoviedb.org/3${link}`);
      const idx = Math.floor(Math.random() * res.length);
      setMovie(res[idx]);
    };
    data();
  }, []);

  return (
    <>
      {movie && (
        <header
          className={classes.root}
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
          }}
        >
          <div className={classes.content}>
            <h1 className={classes.title}>{movie.name}</h1>
            <div style={{ padding: "1.2rem 0" }}>
              <button className={classes.btns}>Play</button>
              <button className={classes.btns}>My List</button>
            </div>
            <h1 className={classes.desc}>{movie.overview}</h1>
          </div>
          <div className={classes.fadeBottom}></div>
        </header>
      )}
    </>
  );
}

export default withStyles(styles)(Banner);
