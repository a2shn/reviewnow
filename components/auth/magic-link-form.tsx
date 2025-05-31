"use client";

import { signInWithMagicLinkAction } from "@/actions/auth";
import { Field, Form, FormButton, FormMessage } from "../shared/form";
import { authSchema } from "@/lib/schema";

export function MagicLinkForm() {
  return (
    <Form
      className="grid gap-2"
      action={signInWithMagicLinkAction}
      schema={authSchema}
    >
      <FormMessage />
      <Field name="email" placeholder="Email" />
      <FormButton> Login </FormButton>
    </Form>
  );
}
