import Header from "./components/Header";
import Footer from "./components/Footer";

function About() {
  return (
    <div className="background">
      <div className="backgroundImageContainerAbout"></div>
      <Header selectedItem="ABOUT" />
      <div className="pageContent">
        <div className="titleSection">
          <h1 className="secondaryTitle">ABOUT</h1>
        </div>
        <h3 className="tertiaryTitle">ABOUT ME</h3>
        <div className="AboutSection">
          <h3 className="aboutText">
            I am in the final year of my bachelor in Computer Science at The Norwegian University of Science and Technology (NTNU). So far in my studies, I have learned SQL, object-oriented programming, network programming and full-stack application development. Throughout my final year I will also learn machine learning, mobile development, and complete a bachelor's thesis. I have also developed a handful of computer science related skills on my own time.
          </h3>
          <h3 className="aboutText">
            I have an international background, with a total of 13 years in Canada, the United States, and the United Arab Emirates. Through my time in international schools, and from Living in these countries I have developed a strong international network, and have become more inclusive of other cultures and religions. Also English and Norwegian have both become native to me, due to my international upbringing.
          </h3>
          <h3 className="tertiaryTitle">EDUCATION</h3>
          <h3 className="aboutText">
            2022 - 2025 Norwegian University of Science and Technology
          </h3>
          <h3 className="tertiaryTitle">LANGUAGES</h3>
          <h3 className="aboutText">Norwegian - Native</h3>
          <h3 className="aboutText">English - Native</h3>
          <h3 className="aboutText">Spanish - A2</h3>
          <h3 className="aboutText">German - A2</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
