import img from "../assets/MGLogoWhite.webp";
import "../App.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContainerTitle">
        <Link to="/">
          <img className="footerImage" src={img} alt="Logo" />
          <h3 className="footerTitle">Magnus Grini</h3>
        </Link>
      </div>
      <div className="footerContainerContent">
        <h3 className="footerContent">email: mgrini2003@gmail.com</h3>
        <Link
          to="https://www.linkedin.com/in/magnus-grini-0424522a7/"
          target="_blank"
        >
          <h3 className="footerContentLink">LinkedIn</h3>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
