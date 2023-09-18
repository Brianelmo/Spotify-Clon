import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import Search from "./pages/Search.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProvider } from "./services/PlayList.service.tsx";
import Playlist from "./pages/Playlist.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  }, 
  {
    path : "/playlist/:id",
    element: <Playlist/>
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
