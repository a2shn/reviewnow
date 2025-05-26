"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useActionState } from "react";
import { signInWithGoogleAction } from "@/actions/auth";
import { Loading } from "../shared/loading";
import { ErrorAlert } from "../shared/error-alert";

export function GoogleAuth() {
  const [state, formAction, isPending] = useActionState(
    signInWithGoogleAction,
    null,
  );
  return (
    <form action={formAction} className="flex flex-col gap-2">
      {state?.success === false && <ErrorAlert message={state.message} />}
      <Button variant="outline" type="submit" className="w-full">
        {isPending ? <Loading /> : <FcGoogle />}
        Continue with Google
      </Button>
    </form>
  );
}
