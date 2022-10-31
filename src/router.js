import { useRoutes } from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/Home";
import Explore from './pages/Explorer';
import Detail from "./pages/Detail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Affiliate from './pages/Affiliate';
import Offer from "./pages/Offer";
import Checkout from './pages/Checkout';
import Blog from "./pages/Blog";

export default function Router () {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/explore", element: <Explore /> },
                { path: "/detail/:detailId", element: <Detail /> },
                { path: "/register", element: <Register /> },
                { path: "/login", element: <Login /> },
                { path: "/pricing", element: <Pricing /> },
                { path: "/affiliation", element: <Affiliate /> },
                { path: "/offer", element: <Offer /> },
                { path: "/checkout", element: <Checkout /> },
                { path: "/blog", element: <Blog /> },
            ]
        }
    ])
}
// import 