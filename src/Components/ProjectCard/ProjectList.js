import AvatarImage from "../Images/portfolio.jpeg";
import "../ProjectCard/ProjectList.css";

const ProjectList = (props) => {
  return (
    <div className="container">
      <div className="project-folder">
        <div>
          <img src={AvatarImage} alt="avatar" />

          <div className="desc">
            <span>
              <li>Title: {props.title}</li>
            </span>
            <span>
              <li>Url: {props.url}</li>
            </span>
            <span>
              <li>Description: {props.desc}</li>
            </span>
          </div>
        </div>
      </div>

      <div className="project-folder">
        <div>
          <img src={AvatarImage} alt="avatar" />

          <div className="desc">
            <span>
              <li>Title: {props.title}</li>
            </span>
            <span>
              <li>Url: {props.url}</li>
            </span>
            <span>
              <li>Description: {props.desc}</li>
            </span>
          </div>
        </div>
      </div>

      <div className="project-folder">
        <div>
          <img src={AvatarImage} alt="avatar" />

          <div className="desc">
            <span>
              <li>Title: {props.title}</li>
            </span>
            <span>
              <li>Url: {props.url}</li>
            </span>
            <span>
              <li>Description: {props.desc}</li>
            </span>
          </div>
        </div>
      </div>
      <div className="project-folder">
        <div>
          <img src={AvatarImage} alt="avatar" />

          <div className="desc">
            <span>
              <li>Title: {props.title}</li>
            </span>
            <span>
              <li>Url: {props.url}</li>
            </span>
            <span>
              <li>Description: {props.desc}</li>
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectList;
