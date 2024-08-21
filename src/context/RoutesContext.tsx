import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
const HomePage = lazy(()=> import("../pages/HomePage/HomePage.tsx"));
const GamePage = lazy(()=> import("../pages/GamePage/GamePage.tsx"));

function RoutesProvider(){

  const router = createBrowserRouter([{
    path:"/",
    element: <HomePage/>},
  {
    path:"/game",
    element: <GamePage/>
  }]);


  return(
    <RouterProvider router={router}></RouterProvider>
  )
}


export {RoutesProvider}