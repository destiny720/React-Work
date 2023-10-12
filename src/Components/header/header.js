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
    const handleContact = () => {
        navigate('/contact');
    }
    const handleHome = () => {
        navigate('/');
    }
  return (
    <div className="header">

      <h2 onClick={handleHome}>Portfolio Page</h2>

      <button onClick={handleContact} className="contact">Contact Me</button>

      {
        location.pathname === '/'
       ?<button onClick={handleAdd}>Add Project</button>
       : <button onClick={handleCancel}>Cancel</button>
    

      }
    
      
    </div>
  );
};

export default Header;
