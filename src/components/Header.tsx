import img from "../assets/MGLogoWhite.webp";
import "../App.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

interface Props {
  selectedItem: string;
}

function Header({ selectedItem }: Props) {
  return (
    <div className="headerContainer">
      <ScrollToTop />
      <div className="imageHeaderContainer">
        <Link to="/">
          <img className="headerImage" src={img} alt="Logo" />
        </Link>
      </div>
      <div className="itemHeaderContainer">
        <h3
          className={
            selectedItem === "HOME" ? "headerItemSelected" : "headerItem"
          }
        >
          <Link to="/">HOME</Link>
        </h3>
        <h3
          className={
            selectedItem === "PROJECTS" ? "headerItemSelected" : "headerItem"
          }
        >
          <Link to="/projects">PROJECTS</Link>
        </h3>
        <h3
          className={
            selectedItem === "ABOUT" ? "headerItemSelected" : "headerItem"
          }
        >
          <Link to="/about">ABOUT</Link>
        </h3>
      </div>
    </div>
  );
}

export default Header;
