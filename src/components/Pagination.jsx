import React, { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";

function Pagination() {
  const { allBlogs, startIdx, setStartIdx, endIdx, setEndIdx } = useContext(BlogContext);
  
  return (
    <div className="flex justify-center mt-4">
      <button 
        className="bg-blue-600 hover:bg-blue-800 text-white text-md rounded-md w-32 py-2"
        onClick={() => {
          if (startIdx === 0) return;
          setStartIdx(prevStartIdx => prevStartIdx - 6);
          setEndIdx(prevEndIdx => prevEndIdx - 6);
        }}
      >
        Previous
      </button>
      <button 
        className="bg-blue-600 hover:bg-blue-800 text-white text-md rounded-md w-32 py-2 mx-2"
        onClick={() => {
          if (endIdx >= allBlogs.length) return;
          setStartIdx(prevStartIdx => prevStartIdx + 6);
          setEndIdx(prevEndIdx => prevEndIdx + 6);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
