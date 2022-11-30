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
      <Layout>{children}</Layout>
    </ReactQueryProvider>
  </BrowserRouter>
);

export default Providers;
