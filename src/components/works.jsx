import React from "react";
import '../works.css';
import WorkBox from "./workbox";


function Works(){
    return (
    <div className="works" style={{fontFamily:"Lora, serif"}}><h1> Selected works</h1>
    <div className="work-box">
    <WorkBox
    image='https://i.pinimg.com/564x/5c/f7/8e/5cf78e5980b7570562f73b6a7a367874.jpg' 
    tech={['Flutter', 'Firebase','Figma']}
    heading="MyPlasticPays ♻️"
    desc="Reverse vending machine with rewards app"
    link="https://github.com/aayahda/MyPlasticPays"
    />
    <WorkBox
    image='https://i.pinimg.com/564x/06/f8/a2/06f8a21d2da0136784b170461fa89f3b.jpg' 
    tech={['HTML', 'CSS','Postgres']}
    heading="Ponderverse 🔮"
    desc="Book review website"
    link="https://github.com/aayahda/Ponderverse"
    />
    <WorkBox
    image='https://i.pinimg.com/564x/38/ca/f0/38caf076e6eece0ef9ba81934867099d.jpg' 
    tech={['React']}
    heading="Keeper ✏️"
    desc="Notes keeping website"
    link="https://github.com/aayahda/Keeper"
    />
    <WorkBox
    image='https://i.pinimg.com/564x/4a/7b/fa/4a7bfaef14900451ef4bb0b04bce5695.jpg' 
    tech={['Flutter','Firebase']}
    heading="Flash Chat ⚡️"
    desc="Flutter chatting App"
    link="https://github.com/aayahda/Flash-chat-app"
    />
    </div>

    </div>);
}

export default Works;