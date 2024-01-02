import { convertToRaw, EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { Fragment } from "react";
import { CreateBlog } from "../services/api-blogs";
import { useAuth } from "../store/authContext";


const BlogEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const { token } = useAuth();

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleGetContent = async () => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContentState);
    console.log("Title:", title);
    console.log("Image URL:", imageUrl);
    console.log("HTML Content:", htmlContent);

    try {
      const blogData = {
        title: title,
        imageUrl: imageUrl,
        description: description,
        content: htmlContent,
      };
      console.log("blogData",blogData);
      console.log("token",token);
        const createdBlog = await CreateBlog(blogData);
        console.log("Blog created successfully:", createdBlog);
      } catch (error) {
        console.error("Error creating blog:", error);
      }
    // Now you can use title, imageUrl, and htmlContent to save to your backend or perform other actions
  };

  return (
    <>
      <div className="mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
      <input
          type="text"
          placeholder="Title"
          className="rounded-md px-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image Url"
          className="rounded-md px-2"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="rounded-md px-2 col-span-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          
        />
        
      </div>

      <div className="border-2 bg-white rounded-md">
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          mention={{
            separator: " ",
            trigger: "@",
          }}
        />
      </div>
      <div className="flex justify-end space-x-3 text-white px-2 my-3">
            <button className="px-2 py-1 rounded-md bg-slate-600">Save</button>
            <button className="px-2 py-1 rounded-md bg-slate-600">Publish</button>
            <button className="px-2 py-1 rounded-md bg-slate-600">Preview</button>
            <button className="px-2 py-1 rounded-md bg-slate-600">Clear</button>
            <button onClick={handleGetContent} className="text-white">
        Get HTML Content
      </button>
          </div>
      
    </>
  );
};
export default BlogEditor;
