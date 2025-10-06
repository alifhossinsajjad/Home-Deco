import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import MianLayout from "../Layouts/MianLayout";
import Products from "../Pages/Products";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";




const router = createBrowserRouter([
    {
        path: '/',
        Component: MianLayout,
        errorElement: <ErrorPage/>,
        hydrateFallbackElement: <p>loading...</p>,
        children: [
            {
                index: true,
                Component: Home,
                loader : ()=> fetch('Data/furnitureData.json'),
            },

            {
                path: '/products',
                Component: Products
            },
            {
                path:'/wishlist',
                Component: WishList,
            }
        ]
    },

   

])

export default router