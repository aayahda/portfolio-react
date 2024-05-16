import React from "react";
import Avatar from "./avatar";


function Bio(){
    return (
        <div  className="bio">
            <ul >
               <li><div className="phrase">
               <div className="AFW"> <div className="circle"></div><p>   Available for Work</p></div>
                <h1>I'm Aadhya K Raj<span className="span">.</span> I Code <span className="span">*</span> I Create <span className="span">*</span> I Innovate<span className="span">.</span></h1>
                <p className="Tag">Transforming Creative Ideas into Captivating Interactive Reality. </p>
                </div></li>
               <li><Avatar/></li>
            </ul>
        </div>
    )
}

export default Bio;