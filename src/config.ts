export const config = {
  apiBaseUrl: import.meta.env.API_BASE_URL,
  cognito: {
    region: import.meta.env.AWS_REGION,
    poolId: import.meta.env.COGNITO_USER_POOL_ID,
    webClientId: import.meta.env.COGNITO_USER_POOL_WEB_CLIENT_ID,
  },
};
