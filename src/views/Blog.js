import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
  const {
    data: dataBlogs,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (dataBlogs && dataBlogs.length > 0) {
      let newDataSimple = dataBlogs.slice(0, 9);
      setNewData(newDataSimple);
    }
  }, [dataBlogs]);

  const handleAddNewBlog = (blog) => {
    let data = newData;
    data.unshift(blog);

    setShow(false);
    setNewData(data);
  };

  const deletePost = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
  };

  return (
    <>
      <Button variant="primary" className="my-3" onClick={handleShow}>
        + Add new blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog handleAddNewBlog={handleAddNewBlog} />
        </Modal.Body>
      </Modal>

      <div className="blog-container">
        {!isLoading &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">
                  <div className="left">{item.title}</div>
                  <div className="right" onClick={() => deletePost(item.id)}>
                    x
                  </div>
                </div>
                <div className="content">{item.body}</div>
                <div>
                  <button className="btn-detail">
                    <Link to={`/blog/${item.id}`}>View detail</Link>
                  </button>
                </div>
              </div>
            );
          })}

        {isLoading && (
          <div style={{ textAlign: "center !important", width: "100%" }}>
            Loading data...
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
