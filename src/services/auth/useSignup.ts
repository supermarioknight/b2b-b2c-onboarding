import http from "../apiClient/http.ts";
import { apiEndpoints } from "../../constants/apiEndpoints.ts";
import { useMutation } from "@tanstack/react-query";
import token from "../apiClient/token.ts";
import { RegisterOrganizationRequest } from "../../schemas/organization-schema.ts";

export const signup = (postData: RegisterOrganizationRequest) => {
  return http().post<RegisterOrganizationRequest, ApiResponse>(
    apiEndpoints.organizations,
    postData
  );
};

export function useSignup() {
  return useMutation({
    mutationFn: signup,
    onSuccess: (response) => {
      token.setToken({ accessToken: response.userId });
    },
  });
}

interface ApiResponse {
  message: string;
  organizationId: string;
  userId: string;
}
