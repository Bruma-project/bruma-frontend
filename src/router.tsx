import { createBrowserRouter, Navigate } from "react-router-dom";

import { AppLayout } from "@/layouts";
import { ROUTES } from "@/models";
import { CharacterSheetCreator, Home, Login, Error404 } from "@/pages";


export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.APP.pathname,
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.APP.CHARACTER_SHEET_CREATOR,
        element: <CharacterSheetCreator />,
      },
    ],
  },
  {
    path: ROUTES.ERROR404,
    element: <Error404 />,
  },
  // Default redirect
  {
    path: "*",
    element: <Navigate replace to={ROUTES.HOME} />,
  },
]);
