"use client";

import { GetLoggedInUser, getFromLocalStorage } from "@/helpers";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from "react";

interface User {
  token?: string;
  id?: Number;
  email?: string;
  name?: string;
  username?: string;
  role_id?: Number;
  profile_picture?: string;
  iat?: Number;
}

interface UserContextProps {
  user: User | null;
  updateUser: (userData: User) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (updateUser: User) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updateUser,
    }));
  };

  useEffect(() => {
    const CONFIG = getFromLocalStorage("CONFIG");

    if (CONFIG && CONFIG?.user) {
      updateUser({
        token: CONFIG.token,
        id: CONFIG.user.user.id,
        email: CONFIG.user.user.email,
        name: CONFIG.user.user.name,
        username: CONFIG.user.user.username,
        role_id: CONFIG.user.user.role_id,
        profile_picture: CONFIG.user.user.profile_picture,
        iat: CONFIG.iat,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
