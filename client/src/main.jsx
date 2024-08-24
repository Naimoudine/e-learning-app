import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./index.css";
import HomePage, { loader as homeLoader } from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CoursePage, { loader as courseLoader } from "./pages/CoursePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "courses/:id",
        element: <CoursePage />,
        loader: courseLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
