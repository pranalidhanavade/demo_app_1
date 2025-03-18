import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "master",
  clientId: "nextjs-app",
});

export const initKeycloak = async () => {
  try {
    const authenticated = await keycloak.init({
      onLoad: "check-sso", // or "login-required" if you want auto-login
      checkLoginIframe: false,
    });

    if (authenticated) {
      console.log("User authenticated", keycloak.token);
    } else {
      console.log("User not authenticated");
    }
    return keycloak;
  } catch (error) {
    console.error("Keycloak initialization failed", error);
    return null;
  }
};

export default keycloak;
