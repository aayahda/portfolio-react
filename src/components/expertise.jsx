import React from "react";
import Marquee from "react-fast-marquee";


function Expertise(){
    return(
        <div className="exp">
            <Marquee style={{color:"white"}}>
          <ul>
            <li>Web Developer</li>
            <li>App Developer</li>
            <li>Front End Developer</li>
            <li>Backend End Developer</li>
            </ul>
          
         </Marquee> 
        </div>
    );
}

export default Expertise;