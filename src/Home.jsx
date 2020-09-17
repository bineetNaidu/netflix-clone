import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const styles = {
  root: {
    overflow: "hidden",
    width: "100%",
    height: "89vh",
  },
  bgImg: {
    position: "absolute",
    top: "1",
    left: "0",
    right: "0",
    bottom: "0",
    objectFit: "cover",
    backgroundPosition: "center",
    zIndex: "-10",
    width: "100%",
    height: "100%",
  },
  bgGradient: {
    background: "rgba(0,0,0,.4)",
    backgroundImage:
      "linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%)",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    zIndex: "-5",
    position: "absolute",
  },
  content: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  input: {
    outline: "none",
    minWidth: "450px",
    height: "60px !important",
    padding: "10px 10px",
    color: "#000",
    boxSizing: "border-box",
    fontSize: "1.5rem",
    border: "solid 1px #8c8c8c",
    borderRadius: "2px",
  },
  btn: {
    boxShadow: "0 1px 0 rgba(0,0,0,.45)",
    fontSize: "1.625rem",
    minHeight: "61px",
    padding: "0 01em",
    backgroundImage: "linear-gradient(to bottom,#e50914,#db0510)",
    color: "#fff",
    backgroundColor: "#e50914",
  },
};

function Home({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h2" style={{ padding: "0.5rem 0" }}>
          Unlimited movies, TV shows and more.
        </Typography>
        <Typography variant="h5">
          All of Netflix, starting at just ₹ 199.
        </Typography>
        <Typography variant="h6" style={{ padding: "0.5rem 0" }}>
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>

        <form noValidate autoComplete="off">
          <input type="text" className={classes.input} placeholder="email*" />
          <button type="submit" className={classes.btn}>
            GET STARTED
          </button>
        </form>
      </div>
      <img
        className={classes.bgImg}
        src="https://assets.nflxext.com/ffe/siteui/vlv3/70731dc8-8977-4ed7-9a0a-421f510aea00/d1aef155-9681-4803-9bfc-2fb5728da810/IN-en-20200914-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/70731dc8-8977-4ed7-9a0a-421f510aea00/d1aef155-9681-4803-9bfc-2fb5728da810/IN-en-20200914-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/70731dc8-8977-4ed7-9a0a-421f510aea00/d1aef155-9681-4803-9bfc-2fb5728da810/IN-en-20200914-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/70731dc8-8977-4ed7-9a0a-421f510aea00/d1aef155-9681-4803-9bfc-2fb5728da810/IN-en-20200914-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        alt="bg gradient"
      />
      <div className={classes.bgGradient}></div>
    </div>
  );
}

export default withStyles(styles)(Home);
