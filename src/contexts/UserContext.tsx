import React from "react";
import { createContext, useContext, useState } from "react";
import User from "../types/User";

interface Value {
  user?: User;
  setUser: (user?: User) => void;
}

interface Props {
  children: React.ReactNode[] | React.ReactNode;
}

const UserContext = createContext({} as Value);

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | undefined>();

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
