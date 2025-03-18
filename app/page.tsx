"use client";
import { useEffect, useState } from "react";
import { initKeycloak } from "../app/lib/keycloak";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ username?: string }>({});
  const [keycloakInstance, setKeycloakInstance] = useState<any>(null);

  useEffect(() => {
    const initializeAuth = async () => {
      const keycloak = await initKeycloak();
      setKeycloakInstance(keycloak);

      if (keycloak?.authenticated) {
        setIsAuthenticated(true);
        setUser({ username: keycloak.tokenParsed?.preferred_username });
      } else {
        keycloak?.login(); // Ensure login is only called after initialization
      }
    };

    initializeAuth();
  }, []);

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
        <p>❌ Not logged in</p>
      )}
    </div>
  );
}
