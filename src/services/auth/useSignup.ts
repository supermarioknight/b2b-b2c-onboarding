import http from "../apiClient/http.ts";
import { apiEndpoints } from "../../constants/apiEndpoints.ts";
import { useMutation } from "@tanstack/react-query";
import token from "../apiClient/token.ts";

export interface ISignupData {
  organizationName: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  password: string;
}

export const signup = (postData: ISignupData) => {
  return http().post<ISignupData, ApiResponse>(
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
