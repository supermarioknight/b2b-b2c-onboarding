import { Auth } from "aws-amplify";
import { InternalAxiosRequestConfig } from "axios";

export async function axiosRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (!config.headers) {
    return config;
  }

  let currentSession;
  try {
    currentSession = await Auth.currentSession();
  } catch (_error) {
    return config;
  }

  const expOfIdToken = currentSession.getIdToken().getExpiration();
  const refreshToken = currentSession.getRefreshToken();
  if (expOfIdToken * 1000 < Date.now()) {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      const newSession = await authUser.refreshSession(refreshToken);
      config.headers.Authorization = `Bearer ${newSession.getIdToken().getJwtToken()}`;
    } catch (_error) {
      Auth.signOut();
      return config;
    }
  } else {
    config.headers.Authorization = `Bearer ${currentSession.getIdToken().getJwtToken()}`;
  }

  return config;
}
