import React, { forwardRef, memo } from "react";
import { withStyles } from "@material-ui/styles";

// Statics
import styles from "./customs/styles/MovieStyles";

const Movie = forwardRef(({ src, txt, classes, highlights }, ref) => {
  return (
    <img
      ref={ref}
      src={src}
      alt={txt}
      className={classes.rootImg}
      style={{ maxHeight: highlights ? "250px" : "100px" }}
    />
  );
});

export default memo(withStyles(styles)(Movie));
