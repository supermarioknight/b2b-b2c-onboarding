import { RegisterOrganizationRequest } from "../../schemas/organization-schema.ts";
import http from "../apiClient/http.ts";
import { apiEndpoints } from "../../constants/apiEndpoints.ts";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export const getOrganizationDetails = (orgId: string) => {
  return http().get<RegisterOrganizationRequest, unknown>(
    `${apiEndpoints.organizations}/${orgId}`
  );
};

export function useGetOrganizationDetails(
  orgId: string,
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryFn: () => getOrganizationDetails(orgId),
    queryKey: ["fetchOrganizationDetails", orgId],
    ...options,
  });
}

// export function useFetchVendors(
//     cmp: number,
//     options?: Omit<UseQueryOptions, 'queryKey' | 'queryFn'>,
// ) {
//   return useQuery({
//     queryKey: ['fetchPurchaseOrder', cmp],
//     queryFn: () => fetchVendors(cmp),
//     ...options,
//   });
// }
