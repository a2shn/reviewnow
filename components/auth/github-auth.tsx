"use client";

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useActionState } from "react";
import { signInWithGithubAction } from "@/actions/auth";
import { Loading } from "../shared/loading";
import { ErrorAlert } from "../shared/error-alert";

export function GithubAuth() {
  const [state, formAction, isPending] = useActionState(
    signInWithGithubAction,
    null,
  );
  return (
    <form action={formAction} className="flex flex-col gap-2">
      {state?.success === false && <ErrorAlert message={state.message} />}
      <Button
        disabled={isPending}
        variant="outline"
        type="submit"
        className="w-full"
      >
        {isPending ? <Loading /> : <FaGithub />}
        Continue with Github
      </Button>
    </form>
  );
}
