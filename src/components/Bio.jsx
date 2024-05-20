import React, { useEffect } from "react";
import Avatar from "./avatar";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Bio(){
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return (
        <div  className="bio" id="home">
            <ul >
               <li>
               <div data-aos="fade-up" data-aos-easing="ease" >
                <div className="phrase">
               <div className="AFW"> <div className="circle"></div><p>   Available for Work</p></div>
                <h1>I'm Aadhya K Raj<span className="span">.</span> I Code <span className="span">*</span> I Create <span className="span">*</span> I Innovate<span className="span">.</span></h1>
                <p className="Tag">Transforming Creative Ideas into Captivating Interactive Reality. </p>
                </div>
                </div>
                </li>
               <li><Avatar/></li>
            </ul>
        </div>
    )
}

export default Bio;