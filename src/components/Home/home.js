import TopBar from "./topBar.js";
import classes from "./home.module.css";
import SideBar from "./sideBar.js";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
// import navBar from "./navBar.js";
const Home = () => {
  return (
    <div className={classes.home} id="Home">
      <TopBar />
      <SideBar />
      <div className={classes.heading}>
        <h1 className={classes.heading1}>
          <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand">
            <p className={classes.heading4}>MF </p>
            <a className={classes.heading3}>
              <span>Programming &</span>
            </a>
          </AnimationOnScroll>
        </h1>
        <br />
        <AnimatedOnScroll animationIn="fadeInDownBig">
          <h1 className={classes.heading2}>Development Studio</h1>
        </AnimatedOnScroll>
      </div>
    </div>
  );
};
export default Home;
