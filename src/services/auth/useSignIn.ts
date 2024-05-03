// TODO: call `amplify/signIn` and if successful, make a request to GET `/getOrganizations` to retrieve organization profile and start onboarding
import { signIn } from "../amplify/signIn";
import { useMutation } from "@tanstack/react-query";
import { SignInRequest } from "../../schemas/organization-schema.ts";

export const login = (postData: SignInRequest) => {
  const { email, password } = postData;
  return signIn(email, password);
};

export function useSignIn() {
  return useMutation({
    mutationFn: login,
    onSuccess: (_response) => {
      // console.log("Organization has successfully been registered.");
    },
  });
}

interface ApiResponse {
  message: string;
  organizationId: string;
  userId: string;
}
