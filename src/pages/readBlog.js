import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../services/api-blogs';
import { useState } from 'react';

export default function ReadBlog(){
    const { id } = useParams();
    const [blogData, setBlogData] = useState("");

    const HtmlRenderer = () => {
    const htmlText = `${blogData.data.content}`

    return (
      <div dangerouslySetInnerHTML={{ __html: htmlText }} />
    );
  };

    useEffect(() => {
        const fetchBlog = async () => {
          try {
            const fetchedBlogData = await getBlogById(id);
            setBlogData(fetchedBlogData);
            console.log(fetchedBlogData);
          } catch (error) {
            console.error('Error fetching blog list:', error);
          }
        };
        fetchBlog();
      }, [id]);
      if (!blogData) {
        return <div>Loading...</div>; // You can replace this with a loading spinner or other UI
      }



    return(
        <div className='pt-24'>
            <div>
                <button>Back</button>
            </div>
            {/* Content  */}
            <div className="px-20 py-5">
                <HtmlRenderer/>
            </div>
        </div>
    );
}