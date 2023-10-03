import { useNavigate } from 'react-router-dom';
import "../ProjectCard/styles.css";
import profiles from '../../mock'


const ProjectList = (props) => {
  const navigate = useNavigate();

  // const handleView = () => {
  //     navigate('/PortfolioPage');

  const handleDelete = () => {
    const index = Number(props.id) -1;
    profiles.splice(index, 1);
  
  }

  return (
    <div className="container">
      <div className="project-folder">
        <div>
          <img src={props.image} alt="avatar" />

          <div className="desc">
            <span>
              <h4>Title:</h4> {props.title}
            </span><br/>
            <span>
              <h4 className="url-link">Url: <a href={props.url} target="blank"> {props.urlName}</a></h4>
            </span><br/>
            <span>
             <h4>Description:</h4> {props.desc}
            </span><br/>
            <div className="button">
              <button onClick={(event) => { navigate(`/PortfolioPage/${props.id}`) }}>
                Edit
              </button>
              <button onClick={handleDelete}> Delete</button>
            </div>
          </div>
        </div>
      </div>

    </div>

     
  );
};

export default ProjectList;
