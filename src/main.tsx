import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//screens
import HomeScreen from "./screens/HomeScreen.tsx";
import NewNoteScreen from "./screens/NewNoteScreen.tsx";
import SeeNotesScreen from "./screens/SeeNotesScreen.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/new",
        element: <NewNoteScreen />,
      },
      {
        path: "/notes",
        element: <SeeNotesScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
