import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/slice/userSlice";
const DisplayPosts = () => {
  const { posts } = useSelector((state) => state.posts);
  console.log(posts);

  const dispatch = useDispatch();

  const getPostsApi = () => dispatch(getPosts());

  return (
    <>
      <button onClick={getPostsApi}>Get Posts</button>
      {!posts.length ? (
        <h1>No Posts</h1>
      ) : (
        posts.map((post, idx) => (
          <div key={idx}>
            <p>{post.title}</p>
          </div>
        ))
      )}
    </>
  );
};

export default DisplayPosts;
