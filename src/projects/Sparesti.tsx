import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import img1 from "../assets/projectImages/sparestiImages/1.png";
import img2 from "../assets/projectImages/sparestiImages/2.png";

function Sparesti() {
  return (
    <div className="background">
      <Header selectedItem="NONE" />
      <div className="projectPageContent">
        <h1 className="projectTitle2">Sparesti</h1>
        <div className="projectAboutSection">
          <h3 className="projectAboutText">
            Sparesti is a website my team and I created in april 2024 for our full stack 
            system development course at NTNU in 2024. Sparesti is a finance application 
            for saving, with integrated BankID connection and AI utilization for saving 
            challenge and saving tip creation. The application is functional on both pc 
            and mobile.{" "}
            <Link
              to="https://sparesti.no/auth"
              target="_blank"
            >
              Click here for the website link.
            </Link>{" "}
            Unfortunately it is no longer possible to log in, due to the BankID test API no longer being available.
          </h3>
        </div>
        <div className="textImageContainer">
          <img src={img1} className="textImage" />
          <img src={img2} className="textImage3" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sparesti;
