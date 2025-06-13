"use client";

import { FcGoogle } from "react-icons/fc";
import { signInWithGoogleAction } from "@/actions/auth";
import { Form, FormButton, FormMessage } from "../shared/form";
import { emptySchema } from "@/lib/schema";

export function GoogleAuth() {
  return (
    <Form
      schema={emptySchema}
      action={signInWithGoogleAction}
      className="grid gap-2"
    >
      <FormMessage />
      <FormButton variant="outline" type="submit" className="w-full">
        <FcGoogle />
        Continue with Google
      </FormButton>
    </Form>
  );
}
