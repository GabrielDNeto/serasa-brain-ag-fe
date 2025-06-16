import { AuthStatusEnum } from "@/@types/auth";
import React, { createContext, useEffect, useState } from "react";

interface IAuthContext {
  authStatus: AuthStatusEnum;
  handleAuthenticate: (token: string) => void;
  handleLogout: () => void;
}

interface IAuthProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [authStatus, setAuthStatus] = useState<AuthStatusEnum>(
    AuthStatusEnum.PENDING,
  );

  const handleAuthenticate = (token: string) => {
    localStorage.setItem("@session:token", token);
    setAuthStatus(AuthStatusEnum.AUTHORIZED);
  };

  const handleLogout = () => {
    setAuthStatus(AuthStatusEnum.UNNAUTHORIZED);
    localStorage.removeItem("@session:token");
  };

  useEffect(() => {
    const token = localStorage.getItem("@session:token");

    if (!token) {
      setAuthStatus(AuthStatusEnum.UNNAUTHORIZED);
    } else {
      handleAuthenticate(token);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ authStatus, handleAuthenticate, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
