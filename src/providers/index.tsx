import {
  ThemeProvider,
  defaultTheme,
} from "@danielnaoexiste/froggy-components";
import type { FC, ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";

import { ReactQueryProvider } from "./ReactQuery";

interface Props {
  children: ReactElement;
}

const Providers: FC<Props> = ({ children }) => (
  <BrowserRouter>
    <ReactQueryProvider>
      <ThemeProvider defaultTheme={defaultTheme}>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </ReactQueryProvider>
  </BrowserRouter>
);

export default Providers;
