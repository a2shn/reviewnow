import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { env } from "./env";
import { magicLink } from "better-auth/plugins";
import { Resend } from "resend";
import MagicLinkEmail from "@/emails/magic-link";
import * as schema from "@/db/schema";

const resend = new Resend(env.AUTH_RESEND_KEY);

export const auth = betterAuth({
  appName: "Reviewnow.",
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    },
    google: {
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
    },
  },
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, url }) => {
        const { error } = await resend.emails.send({
          from: env.AUTH_FROM_MAIL,
          to: email,
          subject: "Login link to Reviewnow",
          react: MagicLinkEmail({ magicLink: url }),
        });

        if (error)
          throw new Error("[auth][resend]: " + error.name + error.message);
      },
    }),
  ],
});
