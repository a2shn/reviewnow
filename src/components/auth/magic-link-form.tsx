"use client";

import { signInWithMagicLinkAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { Label } from "@/components/ui/label";
import { Loading } from "@/components/ui/loading";

export function MagicLinkForm() {
  const [state, formAction, isPending] = useActionState(
    signInWithMagicLinkAction,
    null,
  );

  return (
    <form className="grid gap-2" action={formAction}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="Email" />
        <p className="text-red-500"> {state?.message} </p>
      </div>
      <Button disabled={isPending} type="submit" className="w-full">
        {isPending && <Loading />} Login
      </Button>
    </form>
  );
}
