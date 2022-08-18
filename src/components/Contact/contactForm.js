import "./contactForm.css";
const ContactForm = () => {
  return (
    <div class="formcnt" id="Contact">
      <div class="login-box">
        <h2>Contact</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Name</label>
          </div>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Email</label>
          </div>
          <label class="message">Message</label>
          <div class="user-box">
            <textarea type="password" name="" required="" />
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
