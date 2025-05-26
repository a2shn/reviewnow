"use client";

import { signInWithMagicLinkAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loading } from "../shared/loading";
import { ErrorAlert } from "../shared/error-alert";

export function MagicLinkForm() {
  const [state, formAction, isPending] = useActionState(
    signInWithMagicLinkAction,
    null,
  );

  useEffect(() => {
    if (state?.success === true)
      toast.success(state.message, { duration: Infinity, dismissible: false });
  }, [state]);

  return (
    <form className="grid gap-2" action={formAction}>
      <div className="grid gap-2">
        {state?.success === false && <ErrorAlert message={state?.message} />}
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="Email" />
      </div>
      <Button disabled={isPending} type="submit" className="w-full">
        {isPending && <Loading />} Login
      </Button>
    </form>
  );
}
