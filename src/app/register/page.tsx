"use client";

import { Button } from "@/components/button";
import Link from "next/link";
import { useAuthStore } from "@/stores/auth";
import { useRegister } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const loginStore = useAuthStore((store) => store.login);
  const router = useRouter();
  const register = useRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    register.mutate(
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
          Ro&apos;yhatdan o&apos;tish
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
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-inner focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-2 text-gray-900"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Parolni tasdiqlash
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-inner focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-2 text-gray-900"
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <Button type="submit">Ro&apos;yhatdan o&apos;tish</Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Avval ro&apos;yhatdan o&apos;tganmisiz?{" "}
          <Link
            href="/login"
            className="text-blue-700 font-semibold hover:underline"
          >
            Kirish
          </Link>
        </p>
      </div>
    </div>
  );
}
