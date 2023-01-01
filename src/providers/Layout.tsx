import { Box } from "@danielnaoexiste/froggy-components";
import type { FC, ReactNode } from "react";
import Header from "../components/Header";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Box bg="#0F172A" color="white">
      <Header />
      {children}
    </Box>
  );
};
