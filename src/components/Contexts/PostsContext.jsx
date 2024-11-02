import React, { createContext, useState } from "react";
import posts1 from "../../img/posts-1.jpeg";
import posts2 from "../../img/posts-2.jpeg";
import posts3 from "../../img/posts-3.jpeg";
import posts4 from "../../img/posts-4.jpeg";

export const PostsContext = createContext();
export const PostsProvider = ({ children }) => {
  const [postsData, setPostsData] = useState([
    {
      id: 1,
      img: posts1,
      desc: "podcast",
      title: "Setup your own podcast",
      categories: ["business", "startup", "podcast"],
      date: "Sep 14, 2021",
    },
    {
      id: 2,
      img: posts2,
      desc: "tips & trick",
      title: "Doodle artwork 101",
      categories: ["art", "creative", "tips & trick"],
      date: "Sep 12, 2021",
    },
    {
      id: 3,
      img: posts3,
      desc: "news",
      title: "Mother Nature Taking Over",
      categories: ["news", "nature"],
      date: "Sep 12, 2021",
    },
    {
      id: 4,
      img: posts4,
      desc: "productivity",
      title: "How to Be Productive",
      categories: ["productivity", "mindset"],
      date: "Sep 12, 2021",
    },
  ]);
  return (
    <PostsContext.Provider value={{ postsData, setPostsData }}>
      {children}
    </PostsContext.Provider>
  );
};
