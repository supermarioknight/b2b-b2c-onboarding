import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import http from "../apiClient/http";

export async function signIn(
  email: string,
  password: string
): Promise<CognitoUser | null> {
  try {
    console.log("Successful Cognito authentication");
    const user = await Auth.signIn(email, password);
    http().client.defaults.headers.Authorization = `Bearer + ${user
      .getSignInUserSession()
      .getIdToken()
      .getJwtToken()}`;
    return user;
  } catch (error) {
    throw error;
  }
}
