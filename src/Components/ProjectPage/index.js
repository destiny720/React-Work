import './index.css'
import Header from "../header/header";
import ProjectList from "../ProjectCard/ProjectList";
import profiles from "../../mock";

const ProjectPage = () => {
  return (
    <div>
      <Header />
      <div className="projet-list">
                {
                    profiles.map((profile, index) => {
                        return (
                            <ProjectList
                                key={index}
                                image={profile.image}
                                title={profile.title}
                                url={profile.url}
                                desc={profile.desc}
                            />
                        )
                    })
                }
            </div>
    </div>
  );
};

export default ProjectPage;
