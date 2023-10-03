// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../Header/header";
// import profiles from "../../mock"
// import PlaceholderImg from "../images/Placeholder.png"
// import "./styles.css"

// const PortfolioPage = () => {
//     const navigate = useNavigate();
//     const [titleName, settitleName] = useState('');
//     const [urlName, setUrlName] = useState('');
//     const [descName, setDescName] = useState('');

//     const handleSave = (event) => {
//         const profile = {
//             title: titleName,
//             url: urlName,
//             urlName: urlName,
//             desc: descName,
//             image: PlaceholderImg,
//         }

//         profiles.push(profile);
//         navigate('/');
//     }

//     const handleTitleNameChange = (event) => {
//         const newvalue = event.target.value;
//         settitleName(newvalue);
//     }

//     const handleUrlNameChange = (event) => {
//         const newvalue = event.target.value;
//         setUrlName(newvalue);
//     }
//     const handleDescNameChange = (event) => {
//         const newvalue = event.target.value;
//         setDescName(newvalue);
//     }

//     return (

        
//         <div>
//             <Header />

//             <div className="page-form">

//                 <img src={PlaceholderImg} alt="Avatar" />
//                 <input type="file" />
                
//                 <input 
//                     onChange={handleTitleNameChange} 
//                     value={titleName} 
//                     type="text" 
//                     placeholder="Enter your title" 
//                 />

//                 <input 
//                     onChange={handleUrlNameChange} 
//                     value={urlName} 
//                     type="text"
//                     placeholder="Enter your url" 
//                  />

//                 <textarea 
//                 onChange={handleDescNameChange} 
//                 value={descName} 
//                 placeholder="Enter your description" />
//                 <button onClick={handleSave}>Save</button>
        
//             </div>

//         </div>
//     );
// }

// export default PortfolioPage