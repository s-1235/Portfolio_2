import classes from "./imageContainer.module.css";
import { fadeIn } from "react-animations";
import { useState, useEffect } from "react";
import Radium, { StyleRoot } from "radium";

const ImageContainer = () => {
  const [animate, setAnimate] = useState({});

  const styles = {
    fadeIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
  };
  const changeNavbarColor = () => {
    if (window.scrollY >= 500 && window.scrollY <= 2300) {
      setAnimate(styles);
      console.log(styles.fadeIn);
      console.log("fadeIn");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, [animate]);
  return (
    <div className={`${classes.imgcnt} ${styles.fadeIn}`}>
      <img className={classes.img} src="./assets/images/iambyme(2).jpg" />
    </div>
  );
};
export default ImageContainer;
