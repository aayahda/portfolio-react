import React from "react";
import { quantum } from 'ldrs';
import { helix } from 'ldrs';



function Filler(){
    helix.register();
    quantum.register();
    return(
        <div style={{display:"flex", justifyContent:"center",alignItems:"center",height:"100%"}} >
           <l-quantum  size="125" speed="8.75" color="#39d353"></l-quantum>
        </div>
    );
}

export default Filler;