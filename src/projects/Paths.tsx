import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import img1 from "../assets/projectImages/pathsImages/1.png";
import img2 from "../assets/projectImages/pathsImages/2.png";
import img3 from "../assets/projectImages/pathsImages/3.png";
import img4 from "../assets/projectImages/pathsImages/4.png";

function Paths() {
  return (
    <div className="background">
      <Header selectedItem="NONE" />
      <div className="projectPageContent">
        <h1 className="projectTitle">Paths</h1>
        <div className="projectAboutSection">
          <h3 className="projectAboutText">
            Paths is a decision-based interactive storytelling game engine
            developed by a peer and I for a school project. The program was
            developed using Java and the JavaFX library. We generated all the
            images in the program using MidJourney.{" "}
            <Link
              to="https://gitlab.stud.idi.ntnu.no/magngri/group11idatt2001"
              target="_blank"
            >
              Click here for the git repository.
            </Link>{" "}
            Below are a few screenshots from the program.
          </h3>
        </div>
        <img src={img1} className="textImage" />
        <img src={img2} className="textImage" />
        <img src={img3} className="textImage" />
        <img src={img4} className="textImage" />
      </div>
      <Footer />
    </div>
  );
}

export default Paths;
