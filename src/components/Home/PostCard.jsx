import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="posts__item" key={post.id}>
      <img className="posts__img" src={post.img} alt="post" />
      <div className="posts__content">
        <h6 className="posts__desc">{post.desc}</h6>
        <h4 className="posts__item-title">{post.title}</h4>
        <p className="posts__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minimvel iam, quis nostrud exercitation ullamco laboris...
        </p>
      </div>
      <div className="posts__bottom">
        <div className="posts__theme themes">
          {post.categories.map((categoriesItem, index) => (
            <div className="posts__theme theme" key={index}>
              <p>{categoriesItem}</p>
            </div>
          ))}
        </div>
        <div className="posts__date">
          <p>{post.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
