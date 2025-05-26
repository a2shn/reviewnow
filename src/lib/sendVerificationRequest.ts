"use server";

import MagicLinkEmail from "@/emails/magic-link";
import { env } from "@/env";
import { Resend } from "resend";

const resend = new Resend(env.AUTH_RESEND_KEY);

export async function sendVerificationRequest(params: any) {
  console.log();
  const { error } = await resend.emails.send({
    from: params.provider.from,
    to: params.identifier,
    subject: "Login link to Reviewnow",
    react: MagicLinkEmail({ magicLink: params.url }),
  });

  if (error) throw new Error("[auth][resend]: " + error.name + error.message);
}
