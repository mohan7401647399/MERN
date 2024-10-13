import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import classes from "./styles.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { blogLists, setBlogLists, pending, setPending } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  async function fetchListOfBlogs() {
    setPending(true);
    const response = await axios.get("http://localhost:5000/api/blogs");
    const result = await response.data;
    console.log(result);

    if (result && result.blogLists && result.blogLists.length) {
      setBlogLists(result.blogLists);
      setPending(false);
    } else {
      setPending(false);
      setBlogLists([]);
    }
  }

  async function handleDelete(getCurrentId) {
    console.log(getCurrentId);
    const response = await axios.delete(
      `http://localhost:5000/api/blogs/delete/${getCurrentId}`
    );
    const result = await response.data;

    if (result?.message) {
      fetchListOfBlogs();
    }
  }

  function handleEdit(getCurrentBlogItem) {
    navigate("/add-blog", { state: { getCurrentBlogItem } });
  }

  useEffect(() => {
    fetchListOfBlogs();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1>Blog List</h1>
      {pending ? (
        <h1>Loading data please wait</h1>
      ) : (
        <div className={classes.blogList}>
          {blogLists && blogLists.length ? (
            blogLists.map((blogItem) => (
              <div key={blogItem._id}>
                <p>{blogItem.title}</p>
                <p>{blogItem.description}</p>
                <FaEdit onClick={() => handleEdit(blogItem)} size={30} />
                <FaTrash onClick={() => handleDelete(blogItem._id)} size={30} />
              </div>
            ))
          ) : (
            <h3>No Blogs Added</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
