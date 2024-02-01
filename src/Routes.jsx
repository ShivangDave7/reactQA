import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Home1 from "pages/Home1";
import EduviShop from "pages/EduviShop";
import EduviCourses from "pages/EduviCourses";
import EduviCoursesPricing from "pages/EduviCoursesPricing";
import EduviJoinAsTeacher from "pages/EduviJoinAsTeacher";
import Allmentors from "pages/Allmentors";
import Singlementordetails from "pages/Singlementordetails";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "home1",
      element: <Home1 />,
    },
    {
      path: "eduvishop",
      element: <EduviShop />,
    },
    {
      path: "eduvicourses",
      element: <EduviCourses />,
    },
    {
      path: "eduvicoursespricing",
      element: <EduviCoursesPricing />,
    },
    {
      path: "eduvijoinasteacher",
      element: <EduviJoinAsTeacher />,
    },
    {
      path: "allmentors",
      element: <Allmentors />,
    },
    {
      path: "singlementordetails",
      element: <Singlementordetails />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
