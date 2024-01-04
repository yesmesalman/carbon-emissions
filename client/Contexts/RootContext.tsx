"use client";

import { ReactNode, FC } from "react";
import { UserProvider } from "./UserContext";

const RootContext: FC<{ children: ReactNode }> = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default RootContext;
