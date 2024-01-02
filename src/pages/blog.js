import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import BlogEditor from "../components/blogEditor";
import { useState } from "react";
import BlogCard from "../components/blogCard";
import { useEffect } from "react";
import { getBlogList } from "../services/api-blogs";

export default function Blog() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isCreate, setIsCreate] = useState(false);
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBlogList = await getBlogList();
        setBlogList(fetchedBlogList);
        console.log(fetchedBlogList);
      } catch (error) {
        console.error('Error fetching blog list:', error);
      }
    };
    fetchData();
  }, []);

  function toggleEditor() {
    setIsCreate(!isCreate);
  }
 
  return (
    <div className=" bg-gradient-to-b from-gray-900 to-gray-600 px-10 py-5">
    
      {/* blog nav  */}
      <div className="flex justify-between border-b border-slate-500 mb-3">
        <h1 className=" font-serif text-4xl pb-2 bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">
          Blogs
        </h1>
        {isAdmin && (
          <div
            className="h-10 w-20 bg-slate-100 flex items-center justify-center
           rounded-md drop-shadow-md cursor-pointer hover:bg-slate-400 
           hover:drop-shadow-2xl hover:text-amber-800"
            onClick={toggleEditor}
          >
            <p className="">Create</p>
          </div>
        )}
      </div>

      {/* Editor  */}

      {isCreate && (
        <div className="py-2">
          <BlogEditor />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 cursor-pointer">
        {blogList.map((blog) => (
          <BlogCard
            key={blog._id}
            id={blog._id}
            title={blog.title}
            author={blog.author.name}
            publicationDate={blog.createdAt}
            imageUrl={blog.imageUrl}
            excerpt={blog.description}
            likes={blog.likes}
            comments={blog.comments}
          />
        ))}
      </div>
    </div>
  );
}
