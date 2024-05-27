import React,{useState} from "react";
import '../works.css';
import Fab from '@material-ui/core/Fab';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


function WorkBox(props){
   
    const [isHovered, setIsHovered] = useState(false);
    const backgroundImage = isHovered
        ? `linear-gradient(to bottom, rgba(0,0,0,0) 0%, #151515 100%), url(${props.image})`
        : `linear-gradient(to bottom, rgba(0,0,0,0) 50%, #151515 100%),url(${props.image})`;

    return( 

<div className={`gradient-bg ${isHovered ? 'glow' : ''}`}  style={{ backgroundImage: backgroundImage, transition: 'background-image 0.5s ease-in-out'}}
 onMouseEnter={() => setIsHovered(true)}
 onMouseLeave={() => setIsHovered(false)}>
    <div style={{display:isHovered?"none":"flex"}}><ul>
    {props.tech.map((tec, index) => (
                            <li key={index}>{tec}</li>
                        ))}
        </ul></div>
        <div style={{justifyContent:"center",alignItems:"center",textAlign:"center",height:"100%",display:isHovered?"flex":"none"}}>
            <a href={props.link} target="_blank" rel="noopener noreferrer"><Fab style={{ transform: 'scale(2.0)', backgroundColor:"#151515" ,boxShadow:"none"}}><ArrowOutwardIcon style={{color:"#b9935f", fontSize:"2.5rem",strokeWidth:"2px"}}/></Fab></a></div>
 <div className="desc" style={{display:isHovered?"none":"flex"}}>
    <h3>{props.heading}</h3>
    <p> {props.desc} </p>
 </div>
</div>
);
}

export default WorkBox;