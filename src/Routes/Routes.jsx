import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import NotFound from "../pages/NotFound/NotFound";
import Details from "../pages/Details/Details";



const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "details/:id",
    element: <Details />,
    loader: ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
  },
 
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;


