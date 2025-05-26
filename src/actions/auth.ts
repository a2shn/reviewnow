"use server";

import { authClient } from "@/lib/auth-client";
import { routes } from "@/lib/routes";
import { authSchema } from "@/lib/schema";
import { redirect } from "next/navigation";

async function signInWithMagicLinkAction(_: any, formData: FormData) {
  const schema = authSchema.safeParse(formData.get("email"));
  if (!schema.success) return { message: "Please type a valid email" };
  const { data, error } = await authClient.signIn.magicLink({
    email: formData.get("email") as string,
    callbackURL: routes.dashboard,
  });

  if (error || data.status === false)
    return { success: false, message: "Cannot send Email. Retry later!" };
  return {
    success: true,
    message: `We sent you a link to ${formData.get("email")}`,
  };
}

async function signInWithGithubAction() {
  const { data, error } = await authClient.signIn.social({
    provider: "github",
    callbackURL: routes.dashboard,
  });

  if (error || data.redirect === false)
    return {
      success: false,
      message: "Signing In with Github failed. Retry later!",
    };

  redirect(data.url as string);
}

async function signInWithGoogleAction() {
  const { data, error } = await authClient.signIn.social({
    provider: "google",
    callbackURL: routes.dashboard,
  });

  if (error || data.redirect === false)
    return {
      success: false,
      message: "Signing In with Google failed. Retry later!",
    };

  redirect(data.url as string);
}

export {
  signInWithGoogleAction,
  signInWithGithubAction,
  signInWithMagicLinkAction,
};
