import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectPreview from "./components/ProjectPreview";
import magnusgriniImage from "./assets/projectThumbnails/magnusgrini.com.png";
import pathsImage from "./assets/projectThumbnails/paths.png";
import weighttrackerImage from "./assets/projectThumbnails/weighttracker.png";
import sparestiImage from "./assets/projectImages/sparestiImages/1.png";
import tasksterImage from "./assets/projectThumbnails/taskster.png";

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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
