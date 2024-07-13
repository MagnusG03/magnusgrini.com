import Header from "../components/Header";
import Footer from "../components/Footer";

function MagnusGrini() {
  return (
    <div className="background">
      <Header selectedItem="NONE" />
      <div className="projectPageContent">
        <h1 className="projectTitle">MagnusGrini.com</h1>
        <div className="projectAboutSection">
          <h3 className="projectAboutText">
            MagnusGrini.com is a website i developed in summer 2023 for use as a cv, as
            well as to learn React. The website is developed using React,
            TypeScript, HTML, and CSS.
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MagnusGrini;
