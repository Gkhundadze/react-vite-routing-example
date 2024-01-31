import { createBrowserRouter } from "react-router-dom";
import { ContactPage } from "../components/pages/ContactPage";
import { MainPage } from "../components/pages/MainPage";
import { NotFoundPage } from "../components/pages/NotFoundPage";
import { RegisterPage } from "../components/pages/RegisterPage";
import { Root } from "../components/pages/Root";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '/',
          element: <MainPage/>
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ]
    },
  ]);