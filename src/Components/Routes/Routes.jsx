import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../../Pages/Home/Home"
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import AllProducts from "../AllProducts/AllProducts"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[{
        index:true,
        element:<Home></Home>,
        loader:()=>fetch("http://localhost:3000/products")
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/allproducts",
      element:<AllProducts></AllProducts>
    },
  ]
  },
]);
