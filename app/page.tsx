"use client";
import { useEffect, useState } from "react";
import { initKeycloak } from "../app/lib/keycloak";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [user, setUser] = useState<{ username?: string }>({});

  const handleNotAuth = () => {
    window.location.href = 'http://192.168.1.125:4321/login'
  }
  const getCookie = (name) => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return null;
};

    const initializeAuth = async () => {
      const auth = getCookie("session");
      console.log("Reached inside auth23456789", auth)
      if (auth) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false)
        window.location.href = 'http://192.168.1.125:4321/login' // Ensure login is only called after initialization
      }
    };

  useEffect(() => {
    initializeAuth();
  }, []);

  const logout = () => {
    
  };

  return (
    <div>
      {
      isAuthenticated && (
        <div>
          Successfully logged In
          <button onClick={logout}></button>
        </div>
      )}
      
    </div>
  );
}
