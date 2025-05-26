"use server";

import { signIn } from "@/auth";
import { authSchema } from "@/lib/schema";

async function signInWithMagicLinkAction(_: any, formData: FormData) {
  const schema = authSchema.safeParse(formData.get("email"));
  if (!schema.success) return { message: "Please type a valid email" };
  return await signIn("resend", { redirectTo: "/", formData });
}

async function signInWithGithubAction() {
  return await signIn("github", { redirectTo: "/" });
}

async function signInWithGoogleAction() {
  return await signIn("google", { redirectTo: "/" });
}

export {
  signInWithGoogleAction,
  signInWithGithubAction,
  signInWithMagicLinkAction,
};
