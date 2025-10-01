import { Account } from "@/hooks/useAuth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  account: Account | null;
  login: (token: string, account: Account) => void;
  logout: () => void;
}
export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAuthenticated: false,
      accessToken: null as string | null,
      account: null as Account | null,
      login: (token: string, account: Account) =>
        set({ isAuthenticated: true, accessToken: token, account }),
      logout: () =>
        set({ isAuthenticated: false, accessToken: null, account: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
