// TODO: call `amplify/signIn` and if successful, make a request to GET `/getOrganizations` to retrieve organization profile and start onboarding
import { signIn } from "../amplify/signIn";
import { useMutation } from "@tanstack/react-query";
import { SignInRequest } from "../../schemas/organization-schema.ts";

export const login = (postData: SignInRequest) => {
  const { email, password, signInFor } = postData;
  return signIn(email, password).then((_response) => {
    if (_response?.attributes?.["custom:organizationId"]) {
      console.log(_response?.attributes?.["custom:organizationId"], 55555555);
      // make api call to org
      // TODO: check getOrganizationDetails in useGetOrganizationDetails.ts file, maybe it can be used
    }
  });
};

export function useSignIn() {
  return useMutation({
    mutationFn: login,
    onSuccess: (_response) => {},
  });
}
