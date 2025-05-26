"use client";

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useActionState } from "react";
import { signInWithGithubAction } from "@/actions/auth";
import { Loading } from "../shared/loading";

export function GithubAuth() {
  const [_, formAction, isPending] = useActionState(
    signInWithGithubAction,
    null,
  );
  return (
    <form action={formAction}>
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
