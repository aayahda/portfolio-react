import React from "react";


function Card(){
    return(
        <div className="card-container" style={{backgroundColor:"#b9935f"}}>
                <a href="https://ibb.co/pn19Hkr">
                    <img style={{ width: '70px', height: '70px' ,backgroundColor:"#262626",borderRadius:"50%"}} src="https://i.ibb.co/WsHYrRp/Avatar-Upscaled.png" alt="Avatar-Upscaled" border="0"/>
                    </a>
            <div className="content" style={{backgroundColor:"#b9935f",paddingRight:"60px"}}>
                <h3 style={{marginTop:"0px",marginBottom:"5px"}}>Aadhya K Raj</h3>
            <p style={{fontSize:"20px", fontFamily:"'Nunito', sans-serif"}}> Experienced full stack developer skilled in crafting web applications that combine sleek front-end design with robust back-end functionality.</p>
            </div>
        </div>
    )
}

export default Card;