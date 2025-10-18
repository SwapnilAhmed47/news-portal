import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<HomeLayout></HomeLayout>,
            loader:()=>fetch('/news.json'),
            children:[
                {
                    index:true,
                    element:<Home></Home>
                },
                {
                    path:'/category/:id',
                    element: <CategoryNews></CategoryNews>,
                    loader: ()=>fetch("/news.json")
    
                },
                
            ]
        },
        {
            path:'/auth',
            element:<h2>Auth Layout</h2>
        },
        {
            path:'/news',
            element:<h2>News Layout</h2>
        },
        {
            path:'/*',
            element:<h2>Error 404</h2>
        }
    ]
)

export default router