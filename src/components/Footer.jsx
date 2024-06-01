import React from "react";
import Fab from '@mui/material/Fab';
import { Link } from 'react-scroll';



function Footer(){

    const year = new Date().getFullYear();
    return(<footer>
        <div>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}><Fab size="medium" >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
        <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z"></path>
        </svg>
    </Fab></Link>
    <div className="fmenu">
    <div>
        <p><Link to="works" spy={true} smooth={true} offset={90} duration={500}>Works</Link> </p>
        <p><Link to="honors" spy={true} smooth={true} offset={70} duration={500}>Honors</Link></p>
        <p><Link to="about" spy={true} smooth={true} offset={120} duration={500}>About</Link></p>
    </div>
    <div className="fbuttons">
        <p>
        <a href="https://x.com/aayahda" target="_blank" rel="noopener noreferrer">
            <Fab size="small" className="custom-fab" style={{backgroundColor:'#262626',boxShadow:"none"}}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
                    <g fill="#a3a3a3" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}>
                        <g transform="scale(8.53333,8.53333)">
                            <path d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z">
                            </path>
                        </g>
                    </g>
                </svg>
            </Fab>
            </a>
            </p>
          <p>  
          <a href="https://github.com/aayahda" target="_blank" rel="noopener noreferrer">
            <Fab size="small" className="custom-fab" style={{backgroundColor:'#262626',boxShadow:"none"}}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
                    <g fill="#a3a3a3" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}>
                        <g transform="scale(8.53333,8.53333)">
                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z">
                            </path>
                        </g>
                    </g>
                </svg>
            </Fab>
            </a>
        </p>
        <p>
        <a href="https://www.linkedin.com/in/aadhyakraj/" target="_blank" rel="noopener noreferrer">
            <Fab size="small" className="custom-fab" style={{backgroundColor:'#262626',boxShadow:"none"}}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
<g fill="#a3a3a3" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(10.66667,10.66667)"><path d="M5,3c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM5,5h14v14h-14zM7.7793,6.31641c-0.857,0 -1.37109,0.51517 -1.37109,1.20117c0,0.686 0.51416,1.19922 1.28516,1.19922c0.857,0 1.37109,-0.51322 1.37109,-1.19922c0,-0.686 -0.51416,-1.20117 -1.28516,-1.20117zM6.47656,10v7h2.52344v-7zM11.08203,10v7h2.52344v-3.82617c0,-1.139 0.81264,-1.30273 1.05664,-1.30273c0.244,0 0.89649,0.24473 0.89649,1.30273v3.82617h2.44141v-3.82617c0,-2.197 -0.97627,-3.17383 -2.19727,-3.17383c-1.221,0 -1.87226,0.40656 -2.19726,0.97656v-0.97656z"></path></g></g>
</svg></Fab>
</a></p>
        </div></div>
        <p>🖤</p>
        <p>© copyright {year}</p>
        </div>
    </footer>)
}

export default Footer;