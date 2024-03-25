import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Cars from "./Pages/Cars";
import AddCars from "./Pages/AddCars/AddCars";
import ValueFilterByNameContextProvider from "./Context/ValueFilterByName/ValueFilterByNameProvider";
import EditCars from "./Pages/EditCars/EditCars";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/dashboard",
      element: (
        <ValueFilterByNameContextProvider>
          <Dashboard />
        </ValueFilterByNameContextProvider>
      ),
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
      element: (
        <ValueFilterByNameContextProvider>
          <AddCars />
        </ValueFilterByNameContextProvider>
      ),
    },
    {
      path: "/cars/edit-cars/:id",
      element: (
        <ValueFilterByNameContextProvider>
          <EditCars />
        </ValueFilterByNameContextProvider>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
