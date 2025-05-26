"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useActionState } from "react";
import { Loading } from "../ui/loading";
import { signInWithGoogleAction } from "@/actions/auth";

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
