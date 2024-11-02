import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../Contexts/PostsContext";
import PostCard from "../Home/PostCard";

const LatestPost = () => {
  const { postsData } = useContext(PostsContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(postsData);
  const PostsCategories = [
    "All",
    "Business",
    "News",
    "Tips & Trick",
    "Podcast",
    "Productivity",
  ];
  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? postsData
        : postsData.filter((post) =>
            post.categories.includes(selectedCategory.toLowerCase())
          );
    setFilteredPosts(filtered);
  }, [postsData, selectedCategory]);
  return (
    <section className="latest-post">
      <div className="latest-post__container container">
        <h2 className="latest-post__title latest-episode__title title">
          Latest Posts
        </h2>
        <div className="latest-post__category-filters latest-episode__category-filters">
          {PostsCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "latest-episode__active-btn"
                  : ""
              } latest-episode__btn`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="latest-post__block">
          {filteredPosts.map((post, index) => (
            <div className="latest-post__item" key={index}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
