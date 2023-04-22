import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Option from './views/Option'
import ViewerChoice from './views/ViewerChoice'
import Streamer from './views/Streamer'
import ViewerResult from "./views/ViewerResult";
import QuestionOne from "./components/viewer/questions/QuestionOne";
import QuestionThree from "./components/viewer/questions/QuestionThree";
import QuestionTwo from "./components/viewer/questions/QuestionTwo";
import QuestionFour from "./components/viewer/questions/QuestionFour";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Option/>,
    },
    {
      path: "/SetUp/Welcome",
      element: <ViewerChoice/>,
    },
    {
      path: "/SetUp/QuestionOne",
      element: <QuestionOne/>,
    },
    {
      path: "/SetUp/QuestionTwo",
      element: <QuestionTwo/>,
    },
    {
      path: "/SetUp/QuestionThree",
      element: <QuestionThree/>,
    },
    {
      path: "/SetUp/QuestionFour/:cat1/:cat2/:cat3",
      element: <QuestionFour/>,
    },
    {
      path: "/StreamerX",
      element: <Streamer/>,
    },
    {
      path: "/Recommendations/:cat1/:cat2/:cat3/:tag1/:tag2/:tag3/:tag4/:tag5",
      element: <ViewerResult/>,
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
