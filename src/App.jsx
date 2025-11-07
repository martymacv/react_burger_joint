import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Subscribtion from "./components/Subscribtion";
import { subscribeAction } from "./actions/subscribeAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Subscribtion />,
    action: subscribeAction
    // children: [
      // { index: true, element: <Home /> },
      // // { path: "old-home", element: <Navigate to={"/"} /> },
      // { path: "post/:postId", element: <PostDetail /> },
      // { path: "login", element: <Navigate to="/auth/login" /> },
      // { 
      //   path: "auth/login",
      //   element: <LoginForm />,
      //   action: loginAction
      // },
      // { 
      //   path: "auth/logout",
      //   element: <LogoutForm />,
      //   action: logoutAction
      // },
      // { path: "registration", element: <Navigate to="/auth/registration" /> },
      // { 
      //   path: "auth/registration",
      //   element: <RegistrationFrom /> ,
      //   action: registrationAction
      // },
      // { 
      //   path: "auth/confirm-email",
      //   element: <ConfirmEmailForm />,
      //   action: confirmAction
      // },
      // { path: "recovery", element: <Navigate to="/auth/recovery" /> },
      // { path: "auth/recovery", element: <RecoveryForm /> },
      // { path: "profile/:userId", element: <UserProfile /> },
      // { path: "search/", element: <SearchResult /> },
      // { path: "profile/:userId/portfolio/", element: <Portfolio /> },
    //   { path: "category/:categoryId", element: <Category /> },
    //   { path: "product/:productId", element: <ProductDetails /> },
    //   { path: "*", element: <NotFound /> },
      // { path: "*", element: <Navigate to="/" /> },
    // ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
