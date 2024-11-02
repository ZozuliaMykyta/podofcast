import React from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { register } from "swiper/element/bundle";
import HomePage from "./pages/Homepage";
import Layout from "./components/Layout";
import { EpisodesProvider } from "./components/Contexts/EpisodesContext";
import { PostsProvider } from "./components/Contexts/PostsContext";
import Post from "./pages/Post";
import About from "./pages/About";
import EpisodesDetail from "./pages/EpisodesDetail";
import Episode from "./components/EpisodesDetail/Episode";
import Blog from "./pages/Blog";

register();

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/episodes" element={<EpisodesDetail />}>
        <Route path=":id" element={<Episode />} />
      </Route>
    </Route>
  )
);
function App() {
  return (
    <PostsProvider>
      <EpisodesProvider>
        <RouterProvider router={router} />
      </EpisodesProvider>
    </PostsProvider>
  );
}

export default App;
