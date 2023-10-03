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
    
      
    </div>
  );
};

export default Header;
