import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header/header";
import profiles from "../../mock"
import PlaceholderImg from "../images/Placeholder.png"
import "./styles.css"

const PortfolioPage = () => {
    const params = useParams(); 

    const profileById = profiles.find((item) => {
        return item.id == params.id;
    });
    
    const navigate = useNavigate();
    const [titleName, settitleName] = useState(profileById ? profileById.title : '');
    const [urlName, setUrlName] = useState(profileById ? profileById.url : '');
    const [descName, setDescName] = useState(profileById ? profileById.desc : '');

    const handleSave = (event) => {
        const profile = {
            id: profileById ? profileById.id : profiles.length + 1,
            title: titleName,
            url: urlName,
            urlName: urlName,
            desc: descName,
            image: profileById ? profileById.image : PlaceholderImg,
        }
        if (params.id === undefined) {
            
            profiles.push(profile);
        }
        else{
            profiles[Number(params.id) - 1] = profile;
        }

        navigate('/');
    }

    const handleTitleNameChange = (event) => {
        const newvalue = event.target.value;
        settitleName(newvalue);
    }

    const handleUrlNameChange = (event) => {
        const newvalue = event.target.value;
        setUrlName(newvalue);
    }
    const handleDescNameChange = (event) => {
        const newvalue = event.target.value;
        setDescName(newvalue);
    }

    return (

        
        <div>
            <Header />

            <div className="page-form">
                <div className="title">
                    {params.id === undefined ? 'Add' : 'Edit'} Contact
                </div>
                <img src={profileById ? profileById.image : PlaceholderImg} alt="Avatar" />
                <input type="file" />
                
                <input 
                    onChange={handleTitleNameChange} 
                    value={titleName} 
                    type="text" 
                    placeholder="Enter your title" 
                />

                <input 
                    onChange={handleUrlNameChange} 
                    value={urlName} 
                    type="text"
                    placeholder="Enter your url" 
                 />

                <textarea 
                onChange={handleDescNameChange} 
                value={descName} 
                placeholder="Enter your description" />
                <button onClick={handleSave}>Save</button>
        
            </div>

        </div>
    );
}

export default PortfolioPage