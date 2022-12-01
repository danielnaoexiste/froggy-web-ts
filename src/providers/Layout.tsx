import type { FC, ReactNode } from "react";
import Header from "../components/Header";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-slate-900 text-white font-code">
      <Header />
      {children}
    </div>
  );
};
