import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { loader as appLoader } from "./App.jsx";
import ErrorPage from "./errorPage";
import SignInSignUp from './SignInSignUp/SignInSignUp.jsx'
import ProductPage, { loader as productLoader } from "./routes/product.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: appLoader,
    children: [
      {
        path: "product/:productId",
        element: <ProductPage />,
        loader: productLoader,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignInSignUp />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
