import Header from "../header/header";
import ProjectList from "../ProjectCard/ProjectList";
// import mock from "../../mock";

const ProjectPage = () => {
  return (
    <div>
      <Header />
      <div className="card">
        <ProjectList/>
      </div>
    </div>
  );
};

export default ProjectPage;
