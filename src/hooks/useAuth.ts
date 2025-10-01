import { IApiResponse } from "@/entities";
import { client } from "@/common/lib/http";
import { useMutation } from "@tanstack/react-query";

export interface UserLoginResponse {
  account: Account;
  token: string;
}
export interface Account {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
}
export const useLogin = () => {
  return useMutation({
    mutationFn: async (values: { email: string; password: string }) => {
      const response = await client.post<IApiResponse<UserLoginResponse>>(
        "/account/login",
        values,
      );
      return response.data;
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: async (values: { email: string; password: string }) => {
      const response = await client.post<IApiResponse<UserLoginResponse>>(
        "/account/register",
        values,
      );
      return response.data;
    },
  });
};
