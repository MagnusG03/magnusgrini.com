import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectPreview from "./components/ProjectPreview";
import magnusgriniImage from "./assets/projectThumbnails/magnusgrini.com.png";
import pathsImage from "./assets/projectThumbnails/paths.png";
import weighttrackerImage from "./assets/projectThumbnails/weighttracker.png";

function Projects() {
  return (
    <div className="background">
      <div className="backgroundImageContainerProjects"></div>
      <Header selectedItem="PROJECTS" />
      <div className="pageContent">
        <div className="titleSection">
          <h1 className="secondaryTitle">PROJECTS</h1>
        </div>
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

export default Projects;
