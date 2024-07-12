import "../App.css";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  img: string;
  link: string;
}

function ProjectPreview({ title, img, link }: Props) {
  return (
    <div className="projectPreviewContainer">
      <Link to={link}>
        <img className="projectPreviewImage" src={img}></img>
        <h3 className="projectPreviewTitle">{title}</h3>
      </Link>
    </div>
  );
}

export default ProjectPreview;
