import React from 'react';
import { BiSolidLike } from "react-icons/bi";
import { MdModeComment } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

const BlogCard = ({ title, author, publicationDate, imageUrl, excerpt, likes, comments,id }) => {
  const navigate = useNavigate(); 

  function readBlog(){
    navigate(`/blog/${id}`)
  }
 
  return (
    
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={readBlog}>
      <Link to={`/blog/${id}`}>
        <img className="rounded-t-lg" src={imageUrl} alt="" />
        </Link>
      <div className="p-5">
        {/* <a href="#"> */}
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        {/* </a> */}
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">{excerpt}</p>
        <div className="flex items-center justify-between mb-3 text-gray-500">
          <p className="text-sm">{`By ${author}`}</p>
          <p className="text-sm">{new Date(publicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
        </div>
        <div className="flex items-center space-x-4 mb-3">
          <div className="flex items-center space-x-2">
           
            <BiSolidLike className='text-gray-500'/>
            <p className="text-sm">{likes}</p>
          </div>
          <div className="flex items-center space-x-2">
           
            <MdModeComment className='text-gray-500'/>
            <p className="text-sm">{comments}</p>
          </div>
        </div>
        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
          </svg>
        </div>
      </div>
    </div>
   
  );
};

export default BlogCard;
