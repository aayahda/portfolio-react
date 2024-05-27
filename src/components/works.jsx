import React from "react";
import '../works.css';
import WorkBox from "./workbox";


function Works(){
    return (
    <div className="works"><h1> Selected works</h1>
    <WorkBox
    image='https://i.pinimg.com/564x/5c/f7/8e/5cf78e5980b7570562f73b6a7a367874.jpg' 
    tech={['Flutter', 'Firebase','Figma']}
    heading="MyPlasticPays"
    desc="Reverse vending machine"
    />

    </div>);
}

export default Works;