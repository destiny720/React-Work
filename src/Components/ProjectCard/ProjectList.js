
import AvatarImage from '../Images/portfolio.jpeg';
import "../ProjectCard/ProjectList.css";

const ProjectList = () => {
  return (
    <div className="container">

      <div className="project-folder">
        <div className="card">
        <img src={AvatarImage} alt="avatar" />

          <div className="desc">
            <span>
              <li>Title:</li>
            </span>
            <span>
              <li>Url:</li>
            </span>
            <span>
              <li>Description:</li>
            </span>
          </div>
        </div>
      </div>



    </div>
  );
};

export default ProjectList;
