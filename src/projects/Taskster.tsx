import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Taskster() {
  return (
    <div className="background">
      <Header selectedItem="NONE" />
      <div className="projectPageContent">
        <h1 className="projectTitle">Taskster</h1>
        <div className="projectAboutSection">
          <h3 className="projectAboutText">
            Taskster is a to do list application created with flutter. The app includes the all functionality expected from a to do list, as well as the ability to add images to a list, and archive a list. The app is available on the Google Play Store{" "}
            <Link
              to="https://play.google.com/store/apps/details?id=com.magnusgrini.taskster"
              target="_blank"
            >
              Here
            </Link>
            .
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Taskster;
