import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/",
      element: <Cars />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
