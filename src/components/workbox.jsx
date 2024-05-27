import React,{useState} from "react";
import '../works.css';

function WorkBox(props){
    const [isHovered, setIsHovered] = useState(false);
    const backgroundImage = isHovered
        ? `linear-gradient(to bottom, rgba(0,0,0,0) 0%, #151515 100%), url(${props.image})`
        : `linear-gradient(to bottom, rgba(0,0,0,0) 50%, #151515 100%),url(${props.image})`;

    return( 
<div className="work-box">
<div className="gradient-bg"style={{ backgroundImage: backgroundImage, transition: 'background-image 0.3s ease-in-out'}}
 onMouseEnter={() => setIsHovered(true)}
 onMouseLeave={() => setIsHovered(false)}>
    <div style={{display:isHovered?"none":"flex"}}><ul>
    {props.tech.map((tec, index) => (
                            <li key={index}>{tec}</li>
                        ))}
        </ul></div>
 <div className="desc" style={{display:isHovered?"none":"flex"}}>
    <h3>{props.heading}</h3>
    <p> {props.desc} </p>
 </div>
</div>
</div>
);
}

export default WorkBox;