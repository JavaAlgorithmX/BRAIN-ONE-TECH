import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import BlogEditor from "../components/blogEditor";
import { useState } from "react";
import BlogCard from "../components/blogCard";
import { useEffect } from "react";
import { getBlogList } from "../services/api-blogs";
import { useAuth } from "../store/authContext";
import ScrollToTop from "../components/ScrollToTop";

export default function Blog() {
  const { isLoggedIn } = useAuth();
  // const { name, isAdmin = false } = user || {};
  // const [isAdmin, setIsAdmin] = useState(true);
  const [isCreate, setIsCreate] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBlogList = await getBlogList();
        setBlogList(fetchedBlogList);
        setIsLoading(false);
        console.log(fetchedBlogList);
      } catch (error) {
        console.error("Error fetching blog list:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  function toggleEditor() {
    setIsCreate(!isCreate);
  }

  return (
    <>
    <ScrollToTop/>
    <div className=" bg-gradient-to-b from-gray-900 to-gray-600 space-y-2">
      {/* blog banner  */}
      <div className="h-96 w-full bg-gradient-to-tr from-orange-400 to-purple-400">
        <img
          src="./blog-banner.jpg"
          alt=""
          className="h-full w-full object-cover mix-blend-overlay"
        ></img>
      </div>

      <div className="px-10">
        {/* blog nav  */}
        <div className="flex justify-between border-b border-slate-500 mb-3">
          <h1 className=" font-serif text-4xl pb-2 bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">
            Blogs
          </h1>
          {isLoggedIn && (
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
          <div className="py-2 ">
            <BlogEditor />
          </div>
        )}

        <div className="flex items-center justify-center pb-5">
          {isLoading && (
            <div className="h-60 w-60 flex items-center justify-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
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
      </div>
    </div>
    </>
  );
}
