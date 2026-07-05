import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "@/store";

import Home from "./pages/Home";
import HeaderWrapper from "./components/HeaderWrapper";
// import ProtectedRoute from "./ProtectedRoute";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

import User from "./pages/User";
import Department from "./pages/Department";
import Leaves from "./pages/Leaves";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      // <ProtectedRoute>
      <HeaderWrapper>
        <Home />
      </HeaderWrapper>
      // </ProtectedRoute>
    ),
  },
  {
    path: "/users",
    element: (
      // <ProtectedRoute>
      <HeaderWrapper>
        <User />
      </HeaderWrapper>
      // </ProtectedRoute>
    ),
  },
  {
    path: "/leaves",
    element: (
      // <ProtectedRoute>
      <HeaderWrapper>
        <Leaves />
      </HeaderWrapper>
      // </ProtectedRoute>
    ),
  },
  {
    path: "/departments",
    element: (
      // <ProtectedRoute>
      <HeaderWrapper>
        <Department />
      </HeaderWrapper>
      // </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
