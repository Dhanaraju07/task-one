import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gettingPosts } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./Posts.css";
import CreatePost from "../CreatePost/CreatePost";
const Posts = () => {
  const { posts, loading, error } = useSelector((state) => state.Posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettingPosts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <>
    <CreatePost />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "98vw",
        height: "100vh",
       
        margin: "12px",
        padding: "12px",
      }}
    >
      <h1>List of All Posts</h1>
      {posts.map((each, index) => {
        return (
          <div
            style={{
              display: "flex",
              border: "1px solid grey",
              flexDirection: "column",
              width: "92vw",
              padding: "12px",
              margin: "12px",
            }}
            key={index}
          >
            <h3>{each.title}</h3>
            <p>{each.body}</p>
            <Link href={`/posts/${each.id}`}>View Post Detail</Link>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Posts;
