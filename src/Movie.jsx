import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  rootImg: {
    objectFit: "contain",
    marginRight: "10px",
    width: "100%",
    transition: "transform .45s",
    "&:hover": {
      transform: "scale(1.08)",
      opacity: 1,
    },
  },
};

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

export default withStyles(styles)(Movie);
