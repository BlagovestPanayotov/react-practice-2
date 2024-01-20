import { createBrowserRouter } from "react-router-dom";
import UserList from "./UserList";
import ContactPage from "./ContactPage";
import UserDetails from "./UserDetails";
import Layout from "./Layout";
import HomePage from "./HomePage";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";

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
    ],
  },
]);

export default router;
