import React from "react";
import '../works.css';

function WorkBox(props){
    return( 
<div className="work-box">
<div className="gradient-bg"style={{ backgroundImage: `
                    linear-gradient(to bottom, rgba(0,0,0,0) 50%,#151515 100%),
                    url(${props.image})
                `,
               }}>
    <div ><ul>
    {props.tech.map((tec, index) => (
                            <li key={index}>{tec}</li>
                        ))}
        </ul></div>
 <div className="desc">
    <h3>{props.heading}</h3>
    <p> {props.desc} </p>
 </div>
</div>
</div>
);
}

export default WorkBox;