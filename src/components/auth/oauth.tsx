import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export function OAuth() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Button variant="outline" type="button" className="w-full">
        <FaGithub />
        Continue with Github
      </Button>
      <Button variant="outline" type="button" className="w-full">
        <FcGoogle />
        Continue with Google
      </Button>
    </div>
  );
}
