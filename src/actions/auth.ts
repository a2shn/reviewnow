"use server";

import { signIn } from "@/auth";
import { authSchema } from "@/lib/schema";

async function signInWithMagicLinkAction(_: any, formData: FormData) {
  const schema = authSchema.safeParse(formData.get("email"));
  if (!schema.success) return { message: "Please type a valid email" };
  return await signIn("resend", formData);
}

async function signInWithGithubAction(_: any, formData: FormData) {
  return await signIn("github");
}

async function signInWithGoogleAction(_: any, formData: FormData) {
  return await signIn("google");
}

export {
  signInWithGoogleAction,
  signInWithGithubAction,
  signInWithMagicLinkAction,
};
