import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectPreview from "./components/ProjectPreview";
import magnusgriniImage from "./assets/projectThumbnails/magnusgrini.com.png";
import pathsImage from "./assets/projectThumbnails/paths.png";
import weighttrackerImage from "./assets/projectThumbnails/weighttracker.png";

function Home() {
  return (
    <div className="background">
      <div className="backgroundImageContainer"></div>
      <Header selectedItem="HOME" />
      <div className="pageContent">
        <div className="titleSection">
          <h1 className="title">MAGNUS GRINI</h1>
        </div>
        <h3 className="ProjectsSectionTitle">RECENT PROJECTS</h3>
        <div className="ProjectPreviewSection">
          <ProjectPreview
            title="MagnusGrini.com"
            img={magnusgriniImage}
            link="/projects/magnusgrini"
          />
          <ProjectPreview
            title="Weight Tracker"
            img={weighttrackerImage}
            link="/projects/weighttracker"
          />
          <ProjectPreview
            title="Paths"
            img={pathsImage}
            link="/projects/paths"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
