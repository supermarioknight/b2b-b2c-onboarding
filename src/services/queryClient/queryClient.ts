import { QueryClient } from "@tanstack/react-query";
import Toast from "../../components/common/toast/Toast.tsx";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
      // onSettled: (_, error: any) => {
      //   if (error?.message) {
      //     Toast.error(error.message);
      //   }
      // },
    },
    mutations: {
      onSettled: (data: unknown, error: Error) => {
        if (error?.message) {
          Toast.error(error?.message || "Something went wrong!");
        }
      },
    },
  },
});
