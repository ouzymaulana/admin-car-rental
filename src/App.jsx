import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import CarList from "./Pages/Cars";

function App() {
  const router = createBrowserRouter([
    {
      path: "SignIn",
      element: <SignIn />,
    },
    {
      path: "Dashboard",
      element: <Dashboard />,
    },
    {
      path: "CarList",
      element: <Cars />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
