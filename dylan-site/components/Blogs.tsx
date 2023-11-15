import Navbar from "./Navbar.jsx";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import ContentProcessor from "./ContentProcessor.jsx";

function Blogs(props:any ) {

  return (
    <div className="min-h-[calc(100dvh-48px)] bg-background-black">
      <div className="text-white w-full">
        
        <ContentProcessor content={props.content.content}/>
        
      </div>
    </div>
  );
}

export default Blogs;