const config = require('./AppConfig.json');

// Auth0
export const auth0 = {
  domain: config.auth0.domain,
  clientId: config.auth0.clientID,
  redirectUri: config.auth0.redirectUri,
};

// Jwt
export const Jwt_token = config.jwt_token;
