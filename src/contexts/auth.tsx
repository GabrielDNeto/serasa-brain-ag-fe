import { AuthStatusEnum } from "@/@types/auth";
import React, { createContext, useState } from "react";

interface IAuthContext {
  authStatus: AuthStatusEnum;
}

interface IAuthProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [authStatus, setAuthStatus] = useState<AuthStatusEnum>(
    AuthStatusEnum.PENDING,
  );

  return (
    <AuthContext.Provider value={{ authStatus }}>
      {children}
    </AuthContext.Provider>
  );
}
