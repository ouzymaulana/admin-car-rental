import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Cars from "./Pages/Cars";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/cars",
      element: <Cars />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
