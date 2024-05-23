import React ,{ useEffect }from "react";
import AOS from 'aos';

function Avatar(){
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return(  
        <div className="avatar" data-aos="fade-left" data-aos-easing="ease">
            <img src="../../Assets/Avatar.png" style={{ width: '310px', height: '310px' }} alt="Memoji"/>
          </div>
    );
}

export default Avatar;