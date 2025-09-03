import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/Layout";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <Error404/>,
        children: [
            {index: true, element: <Home/>},
        ]
    }
])

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;