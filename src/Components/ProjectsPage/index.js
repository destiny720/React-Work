import "./index.css";
import Header from "../Header/header";
import ProjectList from "../ProjectCard";
import profiles from "../../mock";
import Footer from '../Footer/footer'

const ProjectPage = () => {
  return (
    <div>
      <Header />
      <div className="project-list">
        {profiles.map((profile, index) => {
          return (
            <ProjectList
              key={index}
              id={profile.id}
              image={profile.image}
              title={profile.title}
              url={profile.url}
              urlName={profile.urlName}
              desc={profile.desc}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
