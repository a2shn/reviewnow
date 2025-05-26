import { auth } from "@/auth";
import { routes } from "@/lib/routes";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

interface ProtectProps {
  children: React.ReactNode;
}

export async function Protect({ children }: ProtectProps) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(routes.auth);
  }
  return children;
}

export async function Guest({ children }: ProtectProps) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect(routes.dashboard);
  }
  return children;
}
