import React from "react";
import '../honors.css';


function Honors(){
    return (
    <div className="honors">
        <h1> Key Accomplishments</h1>
        <div className="honor-box" >
            <div className="box">
                <div className="bg-img" style={{backgroundImage:"url(../../Assets/Team.png)",backgroundSize:"contain"}}></div>
                    <p> Bagged a prize in National-level India Plastic Challenge Hackathon conducted by the Ministry of India.</p>
            </div>
            <div className="box">
                <div className="bg-img" style={{backgroundImage:"url(../../Assets/TeamWinning.png)",backgroundSize:"contain"}}></div>
                    <p> Among the Top 12 teams in  National Level WiT Ace Hackathon in association with IBM.</p>
            </div>
            <div className="box">
                <div className="bg-img" style={{backgroundImage:"url(../../Assets/TalkShow.png)",backgroundSize:"contain"}}></div>
                    <p> Fortunate to be the youngest Entrepreneur speaker at the at the Women In Business Conclave, Thrissur.</p>
            </div>
            <div className="box">
                <div className="bg-img" style={{backgroundImage:"url(../../Assets/SSF.png)",backgroundSize:"contain"}}></div>
                    <p> Successfully organized Summer Startup Festival , an Entrepreneurship summit multiple times in College.</p>
            </div>
        </div>
        
        </div>);
}


export default Honors;