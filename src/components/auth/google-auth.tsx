import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useActionState } from "react";

export function GoogleAuth() {
  //  const [state, formAction, isPending] = useActionState()
  return (
    <Button variant="outline" type="button" className="w-full">
      <FcGoogle />
      Continue with Google
    </Button>
  );
}
