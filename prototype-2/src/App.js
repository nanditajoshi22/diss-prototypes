import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Home from './views/Home';
import Category from './views/Category';

function App() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/Category/Trending",
        element: <Category name="Trending"/>,
    },
    {
        path: "/Category/News",
        element: <Category name="News"/>,
    },
    {
        path: "/Category/Movies+Shows",
        element: <Category name="Movies & Shows"/>,
    },
    {
        path: "/Category/Fashion+Beauty",
        element: <Category name="Fashion & Beauty"/>,
    },
    {
        path: "/Category/Sports",
        element: <Category name="Sports"/>,
    },
    {
        path: "/Category/Learning",
        element: <Category name="Learning"/>,
    },
    {
        path: "/Category/Music",
        element: <Category name="Music"/>,
    },
    {
        path: "/Category/Gaming",
        element: <Category name="Gaming"/>,
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
