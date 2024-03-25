import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Cars from "./Pages/Cars";
import AddCars from "./Pages/AddCars/AddCars";
import ValueFilterByNameContextProvider from "./Context/ValueFilterByName/ValueFilterByNameProvider";
import EditCars from "./Pages/EditCars/EditCars";
import AlertAfterExecuteContextProvider from "./Context/AlertAfterExecute/AlertAfterExecuteContextProvider";

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
        <AlertAfterExecuteContextProvider>
          <ValueFilterByNameContextProvider>
            <Cars />
          </ValueFilterByNameContextProvider>
        </AlertAfterExecuteContextProvider>
      ),
    },
    {
      path: "/cars/add-cars",
      element: (
        <AlertAfterExecuteContextProvider>
          <ValueFilterByNameContextProvider>
            <AddCars />
          </ValueFilterByNameContextProvider>
        </AlertAfterExecuteContextProvider>
      ),
    },
    {
      path: "/cars/edit-cars/:id",
      element: (
        <AlertAfterExecuteContextProvider>
          <ValueFilterByNameContextProvider>
            <EditCars />
          </ValueFilterByNameContextProvider>
        </AlertAfterExecuteContextProvider>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
