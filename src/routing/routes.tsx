import { createBrowserRouter } from "react-router-dom";
import UserList from "./UserList";
import ContactPage from "./ContactPage";
import UserDetails from "./UserDetails";
import Layout from "./Layout";
import HomePage from "./HomePage";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "users",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetails /> }],
      },

      { path: "contact", element: <ContactPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

export default router;
