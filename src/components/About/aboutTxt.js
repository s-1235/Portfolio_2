import classes from "./aboutTxt.module.css";
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
      <p className={classes.txtAbout}>About</p>
      <h1 className={classes.txtTitle}>Freelancer</h1>
      <p className={classes.txtPara}>
        Hi, I'm Me, a passionate freelancer bringing you programming and design
        from the future. I am experienced in developing web and desktop
        applications including full front end design. This includes brand
        identity, graphics and illustrations.{" "}
      </p>
      <a className={classes.hirebtn}>Hire</a>
    </div>
  );
};
export default AboutText;
