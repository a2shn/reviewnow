"use client";

import { signInAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { Label } from "@/components/ui/label";

export function MagicLinkForm() {
  const [state, formAction, isPending] = useActionState(signInAction, null);

  return (
    <form className="grid gap-2" action={formAction}>
      <div className="grid gap-2">
        <Label>Email</Label>
        <Input placeholder="Email" />
        <p className="text-red-500"> {state?.message} </p>
      </div>
      <Button disabled={isPending} type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
}
