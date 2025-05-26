import { Book } from "lucide-react";
import { ToggleTheme } from "../shared/toggle-theme";
import { Button } from "../ui/button";
import { SearchBar } from "../ui/search-bar";
import { UserDropdown } from "../shared/user-dropdown";
import { Separator } from "../ui/separator";

export function DashboardHeader() {
  return (
    <div className="border-b-2 border-dashed px-4 py-2 flex items-center justify-between">
      <UserDropdown />
      <div className="flex items-center gap-4">
        <SearchBar />
        <Button size="sm" variant="outline" className="hidden md:flex">
          <Book />
          <Separator orientation="vertical" />
          Docs
        </Button>
        <ToggleTheme />
      </div>
    </div>
  );
}
