import { useQueryStatus } from "../service/auth";
import type { IUserDetails } from "../interfaces";

interface AuthStatus {
  data: IUserDetails | undefined;
  isLoading: boolean;
}

export const useAuth = (): AuthStatus => {
  const { data, isLoading } = useQueryStatus();

  return { data, isLoading };
};
