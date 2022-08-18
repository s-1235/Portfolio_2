import classes from "./aboutTxt.module.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { AnimationOnScroll } from "react-animation-on-scroll";
const AboutText = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <div className={classes.txtcnt}>
      <AnimatedOnScroll animationIn="bounceInRight">
        <AnimationOnScroll
          initiallyVisible={true}
          delay={2000}
          animateIn="animate__wobble"
        >
          <p className={classes.txtAbout}>About</p>
        </AnimationOnScroll>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="fadeInDownBig">
        <h1 className={classes.txtTitle}>Freelancer</h1>
      </AnimatedOnScroll>
      <AnimationOnScroll
        animatePreScroll={false}
        animateIn="animate__fadeInLeftBig"
      >
        <p className={classes.txtPara}>
          Hi, I'm Me, a passionate freelancer bringing you programming and
          design from the future. I am experienced in developing web and desktop
          applications including full front end design. This includes brand
          identity, graphics and illustrations.{" "}
        </p>
      </AnimationOnScroll>

      <a className={classes.hirebtn}>
        <AnimationOnScroll animateIn="animate__tada">Hire</AnimationOnScroll>
      </a>
    </div>
  );
};
export default AboutText;
