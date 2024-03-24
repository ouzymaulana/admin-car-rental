import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Cars from "./Pages/Cars";
import AddCars from "./Pages/AddCars/AddCars";
import ValueFilterByNameContextProvider from "./Context/ValueFilterByName/ValueFilterByNameProvider";

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
      element: (
        <ValueFilterByNameContextProvider>
          <Cars />
        </ValueFilterByNameContextProvider>
      ),
    },
    {
      path: "/cars/add-cars",
      element: <AddCars />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
