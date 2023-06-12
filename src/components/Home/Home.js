import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({togglePost}) => {
  
  return (
    <div className="home-top-container">
      <h1>This is a Homepage</h1>
      <div className="home-main-container">
        <button onClick={togglePost}>Create Post</button>
        <Link style={{ marginRight: "12px" }} to="/posts">
          Move to All Posts
        </Link>
        <Link to="/posts/1">Move to Post Detail View</Link>
      </div>
    </div>
  );
};

export default Home;
