import type { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";

import LoaderBox from "../LoaderBox";
import { useAuth } from "../../utils/useAuth";

export const ProtectedRoute: FC = () => {
  const { data, isLoading } = useAuth();

  if (isLoading) return <LoaderBox />;
  return data ? <Outlet /> : <Navigate to="/" />;
};
