import { useState } from "react";
import "./Blog.scss";
const AddNewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmitBtn = () => {
    if (!title) {
      alert("Missing title");
      return;
    }
    if (!content) {
      alert("Missing content");
      return;
    }

    console.log(
      ">>>check data before send >>> title: ",
      title,
      "content: ",
      content
    );
    setTitle("");
    setContent("");
  };
  return (
    <div className="add-new-container">
      <div className="text-add-new">--- Add new blog ---</div>
      <div className="input-data">
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-data">
        <label>Content: </label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className="btn-add-new" onClick={handleSubmitBtn}>
        Submit
      </button>
    </div>
  );
};

export default AddNewBlog;
