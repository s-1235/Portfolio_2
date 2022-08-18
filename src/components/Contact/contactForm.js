import "./contactForm.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
const ContactForm = () => {
  return (
    <div class="formcnt" id="Contact">
      <div class="login-box">
        <AnimationOnScroll
          initiallyVisible={true}
          duration={5}
          animateIn="animate__swing"
        >
          <h2>Contact</h2>
        </AnimationOnScroll>
        <form>
          <div class="user-box">
            <AnimationOnScroll
              initiallyVisible={true}
              animateIn="animate__flip"
            >
              <input type="text" name="" required="" />

              <label>Name</label>
            </AnimationOnScroll>
          </div>
          <div class="user-box">
            <AnimationOnScroll
              initiallyVisible={true}
              animateIn="animate__flip"
            >
              <input type="text" name="" required="" />
              <label>Email</label>
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll initiallyVisible={true} animateIn="animate__flip">
            <label class="message">Message</label>
            <div class="user-box">
              <textarea type="password" name="" required="" />
            </div>
          </AnimationOnScroll>
          <AnimatedOnScroll animationIn="bounce" duration="2000">
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </AnimatedOnScroll>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
