import React, { useContext } from 'react';
import { BlogContext } from '../contexts/BlogContext';
import { Link } from "react-router-dom";
import parse from 'html-react-parser'
function Home() {
  const { startIdx, endIdx, setIdx, modifyDate, allBlogs, setPost } = useContext(BlogContext);
  const arr = allBlogs.toReversed().slice(startIdx, endIdx);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {
        arr.length > 0 ? (
          arr.map((blog, i) => (
            <Link
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              key={blog.$id}
              to={`/blog/${blog.Title}/${blog.$id}`}
              onClick={() => {
                setPost(blog);
                setIdx(i);
              }}
            >
              <div className="p-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{blog.Title}</h1>
                <h3 className="text-lg font-semibold text-gray-600 mb-1">{blog.Name}</h3>
                <h2 className="text-sm text-gray-500 mb-2 ">{modifyDate(blog.Date)}</h2>
                <p className="text-gray-700 border-t">
                  {parse(blog.content.substring(0, 80)+". . . . . .")}
                </p>
              </div>
              <div className=" p-4 border-gray-200">
                <button className="text-blue-500 hover:text-blue-700 font-semibold">Read More</button>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">Loading....</p>
        )
      }
    </div>
  );
}

export default Home;
