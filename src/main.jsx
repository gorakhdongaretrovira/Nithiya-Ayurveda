import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode> <HelmetProvider> <RouterProvider router={router} /> </HelmetProvider>
</React.StrictMode>
);
