import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";

import { AiOutlineLinkedin } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const scrollToContact = () => {
    const anchor = document.querySelector("#Contact");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollToWork = () => {
    const anchor = document.querySelector("#Work");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollToAbout = () => {
    const anchor = document.querySelector("#About");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollToHome = () => {
    const anchor = document.querySelector("#Home");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="#">
            <i class="fa fa-facebook">
              <FaFacebookSquare />
            </i>
          </a>
          <a href="#">
            <i class="fa fa-twitter">
              <SiUpwork />
            </i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin">
              <AiOutlineLinkedin />
            </i>
          </a>
          <a href="#">
            <i class="fa fa-github">
              <AiFillGithub />
            </i>
          </a>
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <a class="links link-1" onClick={scrollToHome}>
              Home
            </a>

            <a class="links link-1" onClick={scrollToWork}>
              Projects
            </a>

            <a class="links link-1" onClick={scrollToAbout}>
              About
            </a>

            <a class="links link-1" onClick={scrollToContact}>
              Contact
            </a>
          </p>

          <p>MF Programming &copy; 2022</p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
