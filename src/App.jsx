import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import WritePost from './components/WritePost';
import Post from './components/Post';
import Pagination from './components/Pagination';
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/> <Home/> <Pagination/></>
    },
    {
      path:"/writepost",
      element: <><Navbar/><WritePost/></>
    },
    {
      path:"/blog/:title/:id",
      element:<><Navbar/> <Post/></>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App