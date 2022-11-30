import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return <div className="bg-slate-700 text-white font-code">{children}</div>;
};
