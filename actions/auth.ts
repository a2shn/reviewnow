"use server";

import { authClient } from "@/lib/auth-client";
import logger from "@/lib/logger";
import { routes } from "@/lib/routes";
import { redirect } from "next/navigation";

async function signInWithMagicLinkAction(_: any, formData: FormData) {
  const email = formData.get("email") as string;

  const { data, error } = await authClient.signIn.magicLink({
    email,
    callbackURL: routes.dashboard,
  });

  if (error || data.status === false) {
    logger.error(
      "[auth][signInWithMagicLinkAction][authClient] Magic Link couldnot be send. Due to:",
      error,
    );
    return { success: false, message: "Cannot send Email. Retry later!" };
  }

  return {
    success: true,
    message: `We sent you a login link to ${email}`,
  };
}

async function signInWithGithubAction() {
  const { data, error } = await authClient.signIn.social({
    provider: "github",
    callbackURL: routes.dashboard,
  });

  if (error || data.redirect === false) {
    logger.error(
      "[auth][signInWithGithubAction] Redirecting to github failed. Due to:",
      error,
    );
    return {
      success: false,
      message: "Signing In with Github failed. Retry later!",
    };
  }

  redirect(data.url as string);
}

async function signInWithGoogleAction() {
  const { data, error } = await authClient.signIn.social({
    provider: "google",
    callbackURL: routes.dashboard,
  });

  if (error || data.redirect === false) {
    logger.error(
      "[auth][signInWithGoogleAction] Redirecting to google failed. Due to:",
      error,
    );
    return {
      success: false,
      message: "Signing In with Google failed. Retry later!",
    };
  }

  redirect(data.url as string);
}

export {
  signInWithGoogleAction,
  signInWithGithubAction,
  signInWithMagicLinkAction,
};
