"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ username?: string }>({});
  const [keycloakInstance, setKeycloakInstance] = useState<any>(null);


  const logout = () => {
    if (keycloakInstance) {
      keycloakInstance.logout();
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>✅ Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        // <p>❌ Not logged in</p>
        // If not authenticated, redirect to 4321's login
        window.location.href = "http://192.168.1.121:4321/login"
      )}
    </div>
  );
}
