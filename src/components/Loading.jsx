import React from "react";
import Gif from "../assets/AllTash.gif"
function Loading() {
  return (
    <div style={{backgroundColor:"#f7f3f7",display:"flex",justifyContent:"center",height:"100vh"}}>
        <img src={Gif} alt="" width="40%"/>
    </div>
  );
}

export default Loading;
