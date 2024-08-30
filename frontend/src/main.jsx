import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SkeletonTheme baseColor="#f3f4f6">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SkeletonTheme>
);
