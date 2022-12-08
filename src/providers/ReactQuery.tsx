import React from "react";

import { useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
  children: React.ReactNode;
}

export const ReactQueryProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 50,
        suspense: false,
        refetchOnMount: true,
        refetchInterval: false,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        retry: (count, error) => {
          const { message = "" } = (error || {}) as Error;
          const conditions = ["403", "404", "500"];
          if (conditions.some((el) => message.includes(el))) {
            if (count === 0) return true;
            navigate("/");
            return false;
          }

          return count === 0;
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
