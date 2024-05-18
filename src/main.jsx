// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './Route/Rotas'
// import './index.css'
// import { RouterProvider,createBrowserRouter } from 'react-router-dom'

// const route = createBrowserRouter([{
//   path:'/',
//   element:<div> Hello </div>
// }])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={route}/>   
//  </React.StrictMode>,
// )


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import "./index.css";
import Root from "./Route/Rotas";
import ErrorPage  from "./Route/Erro";
const router = createBrowserRouter([
  {
    path: "*",
    element: <Root/>,
    errorElement: <ErrorPage />,

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

