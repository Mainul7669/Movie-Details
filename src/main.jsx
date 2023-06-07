import "bootstrap/dist/css/bootstrap.min.css";


import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <div className="bg-dark">
      <RouterProvider router={router} />
      </div>
  </React.StrictMode>
);
