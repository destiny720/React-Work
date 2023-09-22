import AvatarImage from "../images/portfolio.jpg";
import "../ProjectCard/styles.css";

const ProjectList = (props) => {
  return (
    <div className="container">
      <div className="project-folder">
        <div>
          <img src={AvatarImage} alt="avatar" />

          <div className="desc">
            <span>
              <h4>Title:</h4> {props.title}
            </span><br/>
            <span>
              <h4>Url:</h4> {props.url}
            </span><br/>
            <span>
             <h4>Description:</h4> {props.desc}
            </span>
          </div>
        </div>
      </div>

    </div>

     
  );
};

export default ProjectList;
