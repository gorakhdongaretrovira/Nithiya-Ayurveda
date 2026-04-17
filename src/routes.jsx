import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import About from "./sections/About";
import Products from "./sections/Products";
import Contact from "./sections/Contact";
import Team from "./pages/Team"; // ✅ ADD THIS
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/team", // ✅ ADD THIS
        element: <Team />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;