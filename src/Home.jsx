import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

// CUSTOMS
import useFormState from "./customs/hooks/useFormState";

// Statics
import styles from "./customs/styles/HomeStyles";

function Home({ classes }) {
  const [email, handleEmailChange, emailReset] = useFormState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    emailReset();
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.content}>
          <Typography variant="h2" style={{ padding: "0.5rem 0" }}>
            Unlimited movies, TV shows and more.
          </Typography>
          <Typography variant="h5">
            All of Netflix, starting at just ₹ 199.
          </Typography>
          <Typography variant="h6" style={{ padding: "0.5rem 0" }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>

          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <input
              type="text"
              className={classes.input}
              placeholder="email*"
              value={email}
              onChange={handleEmailChange}
            />
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
    </>
  );
}

export default withStyles(styles)(Home);
