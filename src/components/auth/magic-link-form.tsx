"use client";

import { signInWithMagicLinkAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Loading } from "@/components/ui/loading";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";

export function MagicLinkForm() {
  const params = useSearchParams();
  const [state, formAction, isPending] = useActionState(
    signInWithMagicLinkAction,
    null,
  );

  useEffect(() => {
    if (params.get("type") === "email" && params.get("provider") === "resend") {
      toast.success("We sent you a login link!", { dismissible: false });
    }
  }, [params]);

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
