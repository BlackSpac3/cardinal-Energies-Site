import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = (props) => {
  const url = "http://localhost:4000";
  const [userAuth, setUserAuth] = useState({
    access_token: null,
  });

  const contextvalue = {
    url,
    userAuth,
    setUserAuth,
  };
  return (
    <UserContext.Provider value={contextvalue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
