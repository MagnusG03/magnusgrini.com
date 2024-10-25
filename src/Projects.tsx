import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectPreview from "./components/ProjectPreview";
import magnusgriniImage from "./assets/projectThumbnails/magnusgrini.com.png";
import pathsImage from "./assets/projectThumbnails/paths.png";
import weighttrackerImage from "./assets/projectThumbnails/weighttracker.png";
import sparestiImage from "./assets/projectImages/sparestiImages/1.png";
import tasksterImage from "./assets/projectThumbnails/taskster.png";

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
            title="Taskster"
            img={tasksterImage}
            link="/projects/taskster"
          />
          <ProjectPreview
            title="Sparesti"
            img={sparestiImage}
            link="/projects/sparesti"
          />
          <ProjectPreview
            title="Paths"
            img={pathsImage}
            link="/projects/paths"
          />
          <ProjectPreview
            title="Weight Tracker"
            img={weighttrackerImage}
            link="/projects/weighttracker"
          />
          <ProjectPreview
            title="MagnusGrini.com"
            img={magnusgriniImage}
            link="/projects/magnusgrini"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
