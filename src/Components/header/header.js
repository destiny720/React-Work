import { useNavigate, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {

  const navigate = useNavigate();
    const location = useLocation();

    const handleAdd = () => {
        navigate('/PortfolioPage');
    }

    const handleCancel = () => {
        navigate('/');
    }
  return (
    <div className="header">

      <h2>Portfolio Page</h2>
      {
        location.pathname === '/'
       ?<button onClick={handleAdd}>Add Project</button>
       : <button onClick={handleCancel}>Cancel</button>
      }
      {
        // <nav>
        //   <ul>
        //     <li>Home</li>
        //     <li>About</li>
        //     <li>Service</li>
        //   </ul>
        // </nav>
      }
      
    </div>
  );
};

export default Header;
