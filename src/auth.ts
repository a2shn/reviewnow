import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db/index";
import Resend from "next-auth/providers/resend";
import { env } from "./env";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { routes } from "./lib/routes";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Resend({
      from: env.AUTH_FROM_MAIL,
    }),
    GitHub,
    Google,
  ],
  pages: {
    signIn: routes.auth,
    error: routes.auth,
  },
});
