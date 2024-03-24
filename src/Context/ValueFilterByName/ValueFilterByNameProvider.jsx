import React, { createContext, useContext, useState } from "react";

export const ValueFilterByName = createContext();
export const useValueFilterByName = () => useContext(ValueFilterByName);

const ValueFilterByNameContextProvider = ({ children }) => {
  const [filterByName, setFilterByName] = useState("");

  return (
    <ValueFilterByName.Provider value={{ filterByName, setFilterByName }}>
      {children}
    </ValueFilterByName.Provider>
  );
};

export default ValueFilterByNameContextProvider;
