import { createBrowserRouter, Navigate } from "react-router-dom";

import { AppLayout } from "@/layouts";
import { ROUTES } from "@/models";
import { CharacterSheetCreator, Home } from "@/pages";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
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

  // Default redirect
  {
    path: "*",
    element: <Navigate replace to={ROUTES.HOME} />,
  },
]);
