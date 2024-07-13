import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import MagnusGrini from "./projects/MagnusGrini";
import WeightTracker from "./projects/WeightTracker";
import Paths from "./projects/Paths";
import Sparesti from "./projects/Sparesti";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects/magnusgrini",
    element: <MagnusGrini />,
  },
  {
    path: "/projects/weighttracker",
    element: <WeightTracker />,
  },
  {
    path: "/projects/paths",
    element: <Paths />,
  },
  {
    path: "/projects/sparesti",
    element: <Sparesti />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
