import classes from "./about.module.css";
import ImageContainer from "./imageContainer";
import AboutText from "./aboutTxt.js";
const About = () => {
  return (
    <div className={classes.abtcnt} id="About">
      <ImageContainer />
      <AboutText />
    </div>
  );
};
export default About;
