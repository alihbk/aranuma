import React from "react";
import ReactDOM from "react-dom/client";
import CustomRouter from "./utils/customRouter";
import "./styles/global.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CustomRouter />
  </React.StrictMode>
);
