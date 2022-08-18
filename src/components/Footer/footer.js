import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";

import { AiOutlineLinkedin } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
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
            <a class="link-1" href="#">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Contact</a>
          </p>

          <p>MF Programming &copy; 2022</p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
