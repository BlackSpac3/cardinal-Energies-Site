"use client";

import { createContext, useState } from "react";

export const ClientAppContext = createContext(null);

const ClientAppContextProvider = ({ children }) => {
  const [empModal, setEmpModal] = useState(null);
  const contextValue = {
    empModal,
    setEmpModal,
  };
  return (
    <ClientAppContext.Provider value={contextValue}>
      {children}
    </ClientAppContext.Provider>
  );
};
export default ClientAppContextProvider;
