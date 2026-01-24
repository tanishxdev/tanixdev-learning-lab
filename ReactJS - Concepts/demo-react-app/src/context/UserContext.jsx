import { createContext, useContext } from "react";

/*
  Step 1: Create context object
*/
const UserContext = createContext();

/*
  Step 2: Provider component
  This will wrap the app and provide data
*/
export function UserProvider({ children }) {
  const userName = "Tanish";

  return (
    <UserContext.Provider value={{ userName }}>{children}</UserContext.Provider>
  );
}

/*
  Step 3: Custom hook for clean access
*/
export function useUser() {
  return useContext(UserContext);
}
