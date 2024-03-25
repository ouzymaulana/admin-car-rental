import React, { createContext, useContext, useState } from "react";

export const AlertAfterExecute = createContext();
export const useAlertAfterExecute = () => useContext(AlertAfterExecute);

const AlertAfterExecuteContextProvider = ({ children }) => {
  const [AlertExecute, setAlertExecute] = useState({
    status: false,
    label: "",
    message: "",
  });

  return (
    <AlertAfterExecute.Provider value={{ AlertExecute, setAlertExecute }}>
      {children}
    </AlertAfterExecute.Provider>
  );
};

export default AlertAfterExecuteContextProvider;
