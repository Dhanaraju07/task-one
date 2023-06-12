import React, { useState } from "react";
import Posts from "./components/Posts/Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetailView from "./components/PostDetailView/PostDetailView";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetailView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
