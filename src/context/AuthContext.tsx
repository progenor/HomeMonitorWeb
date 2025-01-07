"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

interface AuthContextType {
  userId: number | null;
  email: string | null;
  username: string | null;
  setUser: (user: {
    userId: number | null;
    email: string | null;
    username: string | null;
  }) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userId, setUserId] = useState<number | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUserId = Cookies.get("user_id");
    const storedEmail = Cookies.get("email");
    const storedUsername = Cookies.get("username");
    if (storedUserId) setUserId(Number(storedUserId));
    if (storedEmail) setEmail(storedEmail);
    if (storedUsername) setUsername(storedUsername);
  }, []);

  const setUser = (user: {
    userId: number | null;
    email: string | null;
    username: string | null;
  }) => {
    if (user.userId) Cookies.set("user_id", user.userId.toString());
    else Cookies.remove("user_id");
    if (user.email) Cookies.set("email", user.email);
    else Cookies.remove("email");
    if (user.username) Cookies.set("username", user.username);
    else Cookies.remove("username");
    setUserId(user.userId);
    setEmail(user.email);
    setUsername(user.username);
  };

  return (
    <AuthContext.Provider value={{ userId, email, username, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
