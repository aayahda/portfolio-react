import React,{useEffect} from "react";
import Experience from "./experience";
import Card from "./card";
import Stack from "./Stack";
import Filler from "./filler";
import AOS from 'aos';

function About(){
     useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return(
        <div className="about" id="about">
            <h1>About Me</h1>      
        <div className="container">
            <div className="exper" data-aos="fade-right" data-aos-easing="ease" ><Experience/></div>
            <div className="LinkedIn" data-aos="fade-down" data-aos-easing="ease"> 
            <div>
            <a href="https://www.linkedin.com/in/aadhyakraj/" target="_blank" rel="noopener noreferrer">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="200" height="200" viewBox="0,0,256,256">
<g fill="#a3a3a3" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{backgroundColor:'#262626'}}><g transform="scale(3.2,3.2)"><path d="M15,9c-2.75,0 -5,2.25 -5,5v50c0,2.75 2.25,5 5,5h50c2.75,0 5,-2.25 5,-5v-50c0,-2.75 -2.25,-5 -5,-5zM15,11h50c1.66797,0 3,1.33203 3,3v50c0,1.66797 -1.33203,3 -3,3h-50c-1.66797,0 -3,-1.33203 -3,-3v-50c0,-1.66797 1.33203,-3 3,-3zM23.90234,16.98438c-3.30078,0 -5.99609,2.69531 -5.99609,5.98828c0,3.29688 2.69531,5.99219 5.99609,5.99219c3.29297,0 5.98438,-2.69531 5.98438,-5.99219c0,-3.29297 -2.69141,-5.98828 -5.98437,-5.98828zM36,17c-0.55078,0 -1,0.44922 -1,1c0,0.55078 0.44922,1 1,1c0.55078,0 1,-0.44922 1,-1c0,-0.55078 -0.44922,-1 -1,-1zM40,17c-0.55078,0 -1,0.44922 -1,1c0,0.55078 0.44922,1 1,1c0.55078,0 1,-0.44922 1,-1c0,-0.55078 -0.44922,-1 -1,-1zM44,17c-0.55078,0 -1,0.44922 -1,1c0,0.55078 0.44922,1 1,1c0.55078,0 1,-0.44922 1,-1c0,-0.55078 -0.44922,-1 -1,-1zM48,17c-0.55078,0 -1,0.44922 -1,1c0,0.55078 0.44922,1 1,1c0.55078,0 1,-0.44922 1,-1c0,-0.55078 -0.44922,-1 -1,-1zM52,17c-0.55078,0 -1,0.44922 -1,1c0,0.55078 0.44922,1 1,1c0.55078,0 1,-0.44922 1,-1c0,-0.55078 -0.44922,-1 -1,-1zM56,17c-0.55078,0 -1,0.44922 -1,1c0,0.55078 0.44922,1 1,1c0.55078,0 1,-0.44922 1,-1c0,-0.55078 -0.44922,-1 -1,-1zM60,17c-0.55078,0 -1,0.44922 -1,1c0,0.55078 0.44922,1 1,1c0.55078,0 1,-0.44922 1,-1c0,-0.55078 -0.44922,-1 -1,-1zM23.90234,18.98438c2.20703,0 3.98438,1.77734 3.98438,3.98828c0,2.21484 -1.77734,3.99219 -3.98437,3.99219c-2.22266,0 -3.99609,-1.77734 -3.99609,-3.99219c0,-2.21094 1.77344,-3.98828 3.99609,-3.98828zM50.10156,30.05859c-3.16406,0 -5.59375,1.23047 -7.25781,2.80859v-2.12109h-10.24609v29.67578h10.59375v-14.6875c0,-1.74219 0.19922,-3.375 0.77734,-4.42578c0.58203,-1.05469 1.40625,-1.68359 3.38281,-1.68359c1.89453,0 2.5,0.66406 2.96094,1.82813c0.46094,1.16797 0.51172,2.91016 0.51172,4.50781v14.46094h9.59766v-2l1,1v-15.17969c0,-3.80078 -0.375,-7.26953 -2.04687,-9.91797c-1.67187,-2.65234 -4.69922,-4.26562 -9.27344,-4.26562zM18.59375,30.74609v29.67578h10.60938v-29.67578zM50.10156,32.05859c4.13672,0 6.26953,1.25 7.58203,3.33203c1.3125,2.07813 1.73828,5.19531 1.73828,8.85156v14.17969h-6.59766v-12.46094c0,-1.60937 0.01953,-3.54297 -0.65234,-5.24219c-0.66797,-1.69531 -2.30078,-3.09375 -4.82031,-3.09375c-2.5,0 -4.25391,1.11719 -5.13281,2.71875c-0.87891,1.59766 -1.02734,3.51953 -1.02734,5.39063v12.6875h-6.59375v-25.67578h6.24609v3.78125h1.72266l0.28125,-0.53125c0.97266,-1.83984 3.43359,-3.9375 7.25391,-3.9375zM20.59375,32.74609h6.60938v25.67578h-6.60937z"></path></g></g>
</svg></a></div>

            </div>
            <div  data-aos="fade-left" data-aos-easing="ease" ><Card className="card"/></div>
            <div  data-aos="fade-left" data-aos-easing="ease" className="stack"><Stack/></div>
            <div data-aos="fade-up" data-aos-easing="ease" className="filler" ><Filler/></div>      
        </div>
        </div>

    );
}

export default About;