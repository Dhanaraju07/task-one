import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_POST_REQUEST_SUCCESS } from "../../redux/actions";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => ({ ...state.Posts }));

  const addPost = async (e) => {
    e.preventDefault();
    try {
      const createPost = {
        userId: posts.length + 1,
        title: title,
        body: body,
        id: posts.length + 1,
      };
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        createPost
      );

      console.log(response.data);
      dispatch({ type: ADD_POST_REQUEST_SUCCESS, payload: response.data });
      setTitle("");
      setBody("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div style={{ width: "30vw", margin: "12px" }}>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <h1>Create a New Post</h1>
          <label>Title</label>
          <input
            style={{ height: "30px", width: "50vw" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          <label>Body</label>
          <input
            style={{ height: "30px", width: "50vw" }}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            type="text"
          />
          <button
            style={{ height: "30px", width: "50.5vw", marginTop: "20px" }}
            onClick={addPost}
          >
            Add New Post
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
