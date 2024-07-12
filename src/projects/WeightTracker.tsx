import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import img1 from "../assets/projectImages/weightTrackerImages/1.webp";
import img2 from "../assets/projectImages/weightTrackerImages/2.webp";
import img3 from "../assets/projectImages/weightTrackerImages/3.webp";
import img4 from "../assets/projectImages/weightTrackerImages/4.webp";

function WeightTracker() {
  return (
    <div className="background">
      <Header selectedItem="NONE" />
      <div className="projectPageContent">
        <h1 className="projectTitle2">WeightTracker</h1>
        <div className="projectAboutSection">
          <h3 className="projectAboutText">
            Weight Tracker is an application I created using React Native in
            order to learn the framework. This is my second project made in
            React Native, after a simple calculator app that served as my
            introduction to the framework. I chose to create a weight tracker
            app because I am interested in working out, and thought that making
            a weight tracking app would both be useful and educational.{" "}
            <Link
              to="https://play.google.com/store/apps/details?id=com.magnusgrini.WeightTracker"
              target="_blank"
            >
              Click here for the app in the Google Play Store.
            </Link>{" "}
            Below are a few screenshots from the program.
          </h3>
        </div>
        <div className="textImageContainer">
          <img src={img1} className="textImage2" />
          <img src={img2} className="textImage2" />
          <img src={img3} className="textImage2" />
          <img src={img4} className="textImage2" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WeightTracker;
