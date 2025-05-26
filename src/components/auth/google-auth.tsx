"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useActionState } from "react";
import { signInWithGoogleAction } from "@/actions/auth";
import { Loading } from "../shared/loading";

export function GoogleAuth() {
  const [_, formAction, isPending] = useActionState(
    signInWithGoogleAction,
    null,
  );
  return (
    <form action={formAction}>
      <Button variant="outline" type="submit" className="w-full">
        {isPending ? <Loading /> : <FcGoogle />}
        Continue with Google
      </Button>
    </form>
  );
}
