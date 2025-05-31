"use client";

import { FaGithub } from "react-icons/fa";
import { signInWithGithubAction } from "@/actions/auth";
import { Form, FormButton } from "../shared/form";
import { emptySchema } from "@/lib/schema";

export function GithubAuth() {
  return (
    <Form
      schema={emptySchema}
      action={signInWithGithubAction}
      className="grid gap-2"
    >
      <FormButton variant="outline" type="submit" className="w-full">
        <FaGithub />
        Continue with Github
      </FormButton>
    </Form>
  );
}
