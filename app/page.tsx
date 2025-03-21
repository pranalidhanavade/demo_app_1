// "use client";
// import { useEffect, useState } from "react";
// import { initKeycloak } from "../app/lib/keycloak";

// export default function Home() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   // const [user, setUser] = useState<{ username?: string }>({});

//   const handleNotAuth = () => {
//     window.location.href = 'http://192.168.1.121:4321/login'
//   }
//   const getCookie = (name: string) => {
//   const cookies = document.cookie.split("; ");
//   for (const cookie of cookies) {
//     const [key, value] = cookie.split("=");
//     if (key === name) {
//       return decodeURIComponent(value);
//     }
//   }
//   return null;
// };

//     const initializeAuth = async () => {
//       const auth = getCookie("session");
//       console.log("Reached inside auth23456789", auth)
//       if (auth) {
//         setIsAuthenticated(true);
//       } else {
//         setIsAuthenticated(false)
//         window.location.href = 'http://192.168.1.121:4321/login' // Ensure login is only called after initialization
//       }
//     };

//   useEffect(() => {
//     initializeAuth();
//   }, []);

//   const logout = () => {
    
//   };

//   return (
//     <div>
//       {
//       isAuthenticated && (
//         <div>
//           Successfully logged In
//           <button onClick={logout}></button>
//         </div>
//       )}
      
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getCookie = (name: string) => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) {
        return decodeURIComponent(value);
      }
    }
    return null;
  };

  useEffect(() => {
    const auth = getCookie("session");
    console.log("Checking session:", auth);

    if (auth) {
      setIsAuthenticated(true);
    } else {
      // Capture current URL before redirecting
      const redirectTo = encodeURIComponent(window.location.href);
      window.location.href = `http://192.168.1.121:4321/signup?redirectTo=${redirectTo}`;
    }
  }, []);

  return (
    <div>
      {isAuthenticated ? <p>✅ Successfully logged in!</p> : <p>Redirecting to login...</p>}
    </div>
  );
}
