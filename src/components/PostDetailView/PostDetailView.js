import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postDetail } from "../../redux/actions";

const PostDetailView = () => {
  const { post } = useSelector((state) => ({ ...state.Post }));
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(postDetail(id));
  }, [dispatch, id]);
  return (
    <div style={{ border: "1px solid grey", margin: "12px", padding: "12px" }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetailView;
