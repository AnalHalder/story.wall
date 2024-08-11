import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate=useNavigate();
  return (
    <div className="flex flex-wrap z-10 min-w-full justify-around bg-blue-50 p-2">
      <h1
        className="text-fuchsia-600 hover:text-fuchsia-800 text-2xl font-bold cursor-pointer" 
        onClick={ ()=> navigate("/") } 
      >
        story.wall
      </h1>
      <button 
      className=" bg-blue-600 hover:bg-blue-900 text-white p-2 rounded-md text-lg"
      onClick={()=>navigate("/writepost")}
      >
        write your post
      </button>
    
    </div>
  );
}

export default Navbar;
