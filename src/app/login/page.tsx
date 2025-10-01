"use client";

import { Button } from "@/components/button";
import Link from "next/link";
import { useAuthStore } from "@/stores/auth";
import { useLogin } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = useLogin();
  const router = useRouter();
  const loginStore = useAuthStore((store) => store.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    login.mutate(
      { email, password },
      {
        onSuccess: (res) => {
          loginStore(res.data?.token, res.data?.account);
          router.push("/");
        },
      },
    );
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4">
      <div className="max-w-md w-full bg-white/90 p-8 rounded-2xl shadow-2xl border border-blue-100">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-blue-800 tracking-tight drop-shadow-sm">
          Hisob raqamingizga kiring
        </h2>
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              E-Pochta
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-inner focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-2 text-gray-900"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Parol
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-inner focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-2 text-gray-900"
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <Button type="submit">Kirish</Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Hisob raqamingiz yo&apos;qmi?{" "}
          <Link
            href="/register"
            className="text-blue-700 font-semibold hover:underline"
          >
            Ro&apos;yhatdan o&apos;tish
          </Link>
        </p>
      </div>
    </div>
  );
}
