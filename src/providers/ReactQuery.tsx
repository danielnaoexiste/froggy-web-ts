import PropTypes from "prop-types";

import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
  children: React.ReactNode;
}

export const ReactQueryProvider: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

ReactQueryProvider.propTypes = {
  children: PropTypes.node,
};
