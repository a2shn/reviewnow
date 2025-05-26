"use server";

import { signIn } from "@/auth";
import { authSchema } from "@/lib/schema";

async function signInAction(_: any, formData: FormData) {
  const schema = authSchema.safeParse(formData.get("email"));
  if (!schema.success) return { message: "Please type a valid email" };
  return await signIn("resend", formData);
}

export { signInAction };
