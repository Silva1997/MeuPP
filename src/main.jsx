import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Route/Rotas";
import ErrorPage from "./Route/Erro";
import FormDisabledDemo from "./Pagina/usuario/Cadrasto";
const router = createBrowserRouter([
  {
    path: "*", // Change the path from "/" to "*"
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Usuario",
        element: <FormDisabledDemo />,

      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

