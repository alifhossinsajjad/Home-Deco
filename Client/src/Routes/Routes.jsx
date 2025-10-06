import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import MianLayout from "../Layouts/MianLayout";
import Products from "../Pages/Products";




const router = createBrowserRouter([
    {
        path: '/',
        Component: MianLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
        ]
    },
    {
        path:'/products',
        Component: Products
    }
])

export default router