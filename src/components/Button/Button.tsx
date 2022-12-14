import type { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  onClick: MouseEventHandler;
  PrefixIcon?: FC;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({ onClick, children, PrefixIcon }) => (
  <button
    onClick={onClick}
    className={
      "bg-slate-700 hover:bg-slate-600 transition duration-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-2"
    }
  >
    {!!PrefixIcon && <PrefixIcon />}

    {children}
  </button>
);
