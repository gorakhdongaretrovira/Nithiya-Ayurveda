import { createHashRouter } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import About from "./sections/About";
import Products from "./sections/Products";
import Contact from "./sections/Contact";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

const router = createHashRouter([
{
path: "/",
element: <App />,
children: [
{
index: true, // ✅ better than path: "/"
element: <Home />,
},
{
path: "about", // ❌ remove leading /
element: <About />,
},
{
path: "products",
element: <Products />,
},
{
path: "team",
element: <Team />,
},
{
path: "contact",
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
