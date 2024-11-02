import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../Contexts/PostsContext";
import PostCard from "./PostCard";

const Posts = () => {
  const { postsData } = useContext(PostsContext);
  const displayedCards = postsData.slice(0, 2);
  return (
    <section className="posts rope">
      <div className="posts__container container">
        <h2 className="posts__title title">Article and News</h2>
        <h6 className="posts__sub-title sub-title">
          News, tips, tricks and more
        </h6>
        <div className="posts__block">
          {displayedCards.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
        <div className="posts__shadow-cont shadow-cont">
          <Link to="blog" className="posts__btn link-sha">
            browse all
          </Link>
          <div className="shadow"></div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
