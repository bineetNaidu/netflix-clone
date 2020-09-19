const styles = {
  root: {
    color: "#fff",
    objectFit: "contain",
    height: "448px",
    position: "relative",
    // backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  content: {
    marginLeft: "30px",
    paddingTop: "140px",
    height: "190px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "800",
    paddingBottom: ".3rem",
  },
  btns: {
    cursor: "pointer",
    color: "#fff",
    outline: "none",
    border: "none",
    fontWeight: "700",
    borderRadius: ".2vw",
    marginRight: "1rem",
    backgroundColor: "rgba(51,51,51,.5)",
    padding: ".5rem 2rem",
    "&:hover": {
      backgroundColor: "rgb(218 206 206)",
      color: "black",
    },
  },
  desc: {
    width: "50rem",
    lineHeight: "1.3",
    fontSize: ".8rem",
    maxWidth: "490px",
    height: "80px",
  },
  fadeBottom: {
    height: "7.4rem",
    backgroundImage:
      "linear-gradient(180deg,transparent,rgba(37,37,37,.61),#111)",
    position: "absolute",
    width: "100%",
    bottom: "0",
  },
};
export default styles;
