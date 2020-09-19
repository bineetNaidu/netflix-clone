import React, { memo } from "react";
import { withStyles } from "@material-ui/styles";

// Statics
import styles from "./customs/styles/MovieStyles";

function Movie({ src, txt, classes, highlights }) {
  return (
    <img
      src={src}
      alt={txt}
      className={classes.rootImg}
      style={{ maxHeight: highlights ? "250px" : "100px" }}
    />
  );
}

export default memo(withStyles(styles)(Movie));
