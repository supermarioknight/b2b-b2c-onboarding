export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  cognito: {
    region: import.meta.env.VITE_AWS_REGION,
    poolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
    webClientId: import.meta.env.VITE_COGNITO_USER_POOL_WEB_CLIENT_ID,
  },
};
