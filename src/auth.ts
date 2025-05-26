import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db/index";
import Resend from "next-auth/providers/resend";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { routes } from "./lib/routes";
import { sendVerificationRequest } from "./lib/sendVerificationRequest";
import { env } from "./env";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Resend({
      from: env.AUTH_FROM_MAIL,
      sendVerificationRequest,
    }),
    GitHub,
    Google,
  ],
  pages: {
    signIn: routes.auth,
    error: routes.auth,
  },
});
