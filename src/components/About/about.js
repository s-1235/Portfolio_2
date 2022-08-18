import classes from "./about.module.css";
import ImageContainer from "./imageContainer";
import AboutText from "./aboutTxt.js";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <div className={classes.abtcnt} id="About">
      <AnimationOnScroll
        animatePreScroll={false}
        animateIn="animate__fadeInRightBig"
      >
        <ImageContainer />
      </AnimationOnScroll>
      <AboutText />
    </div>
  );
};
export default About;
