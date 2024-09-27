"use client";

import logout from "@/actions/logout";
import { User } from "@/actions/user-get";
import validateToken from "@/actions/validate-token";
import React, { useEffect, useState } from "react";

type UserProvider = User & {
  id: number;
  nome: string;
  username: string;
  email: string;
};

type IUserContextProvider = {
  children: React.ReactNode;
  user: UserProvider | null;
};

type IUserContext = {
  user: UserProvider | null;
  setUserState: React.Dispatch<React.SetStateAction<UserProvider | null>>;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);

  if (context === null) {
    throw new Error("useContext deve estar dentro do Provider");
  }

  return context;
};

export function UserContextProvider(
  { children, user }: IUserContextProvider,
) {
  const [userState, setUserState] = useState<UserProvider | null>(user);

  useEffect(() => {
    async function validate() {
      const response = await validateToken();

      if (!response?.ok) await logout();
    }

    if (userState) validate();
  }, [userState]);

  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}
