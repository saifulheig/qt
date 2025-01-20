import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./layouts/Main";
import Home from "./pages/Home/Home";
import SingUp from "./pages/SignUp/SingUp";
import Login from "./pages/Login/Login";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PrivateRoute from "./route/PrivateRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ForgetPassword from "./pages/ForgetPasswordPage/ForgetPassword";
import PrivateLoginandSignRoute from "./route/PrivateLoginandSignRoute";
import SendEmail from "./pages/SendEmailPage/SendEmail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: (
          <PrivateLoginandSignRoute>
            <SingUp />
          </PrivateLoginandSignRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PrivateLoginandSignRoute>
            <Login />
          </PrivateLoginandSignRoute>
        ),
      },
      {
        path: "/send-email",
        element: <SendEmail />,
      },
      {
        path: "/forgot-password/:id/:token",
        element: <ForgetPassword />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="605358284535-cjed9o5j9u74vdhigd6rg0ev067k2k7r.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
