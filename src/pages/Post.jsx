import React, { useContext } from "react";
import { PostsContext } from "../components/Contexts/PostsContext";
import { useParams } from "react-router-dom";
import PostAbout from "../components/Post/PostAbout";
import PodcastApp from "../components/PodcastApp";

const Post = () => {
  const { id } = useParams();
  const { postsData } = useContext(PostsContext);
  const post = postsData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }
  return (
    <>
      <PostAbout post={post} />
      <PodcastApp />
    </>
  );
};

export default Post;
