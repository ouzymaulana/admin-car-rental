import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import CarList from "./Pages/Cars";

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
      element: <CarList />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
