import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./index.css";
import HomePage, { loader as homeLoader } from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CoursePage, { loader as courseLoader } from "./pages/CoursePage";
import SignIn, { action as signInAction } from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Login, { action as loginAction } from "./pages/Login";
import { AuthProvider } from "./hooks/useAuth";
import LessonsPage, { loader as lessonsLoader } from "./pages/LessonsPage";

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
      {
        path: "courses/:courseId/lessons/:lessonId",
        element: <LessonsPage />,
        loader: lessonsLoader,
      },
      {
        path: "signin",
        element: <SignIn />,
        action: signInAction,
        errorElement: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
        errorElement: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <Login />,
        action: loginAction,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
