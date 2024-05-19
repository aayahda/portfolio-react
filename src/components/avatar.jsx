import React ,{ useEffect }from "react";
import AOS from 'aos';

function Avatar(){
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return(
        <div data-aos="fade-left" data-aos-easing="ease" >
        <div className="avatar">
            <img src="../../Assets/Avatar.png" style={{ width: '310px', height: '310px' }}/>
           {/* <a href="https://ibb.co/pn19Hkr"><img style={{ width: '300px', height: '300px' }} src="https://i.ibb.co/WsHYrRp/Avatar-Upscaled.png" alt="Avatar-Upscaled" border="0"/></a> */}
        </div></div>
    );
}

export default Avatar;