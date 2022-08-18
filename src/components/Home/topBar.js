import classes from "./topBar.module.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const TopBar = () => {
  return (
    <AnimatedOnScroll animationIn="bounceInRight">
      <div className={classes.container}>
        <h3 className={classes.logo}>MF Studios</h3>
        <div className={classes.navctn}></div>
      </div>
    </AnimatedOnScroll>
  );
};
export default TopBar;
