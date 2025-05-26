import { Book } from "lucide-react";
import { ToggleTheme } from "../shared/toggle-theme";
import { Button } from "../ui/button";
import { UserDropdown } from "../shared/user-dropdown";
import { Separator } from "../ui/separator";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { routes } from "@/lib/routes";

export function DashboardHeader() {
  return (
    <div className="border-b-2 border-dashed px-4 py-2 flex items-center justify-between">
      <UserDropdown />
      <div className="flex items-center gap-4">
        <Link href={routes.resources.docs}>
          <Button size="sm" variant="outline">
            <Book />
            <Separator orientation="vertical" />
            Docs
          </Button>
        </Link>
        <Link href={routes.resources.github}>
          <Button size="sm" variant="outline">
            <FaGithub />
            <Separator orientation="vertical" />
            GitHub
          </Button>
        </Link>

        <ToggleTheme />
      </div>
    </div>
  );
}
