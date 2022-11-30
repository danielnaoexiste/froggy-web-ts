import { useQueryStatus } from "../service/auth";
import type { IUserDetails } from "../interfaces";

interface AuthStatus {
  data: IUserDetails | undefined;
  isLoading: boolean;
}

type AuthFunc = () => AuthStatus

export const useAuth: AuthFunc = () => {
  const { data, isLoading } = useQueryStatus();

  return { data, isLoading };
};
