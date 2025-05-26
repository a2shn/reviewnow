import { Plus } from "lucide-react";
import { RainbowButton } from "../magicui/rainbow-button";
import { SearchBar } from "../ui/search-bar";
import { Separator } from "../ui/separator";

export function CreateProject() {
  return (
    <div className="flex items-center gap-6 border-b-2 border-dashed px-6 py-4">
      <RainbowButton size="sm" variant="outline" className="rounded-sm">
        <Plus /> <Separator orientation="vertical" /> Create Project
      </RainbowButton>
      <SearchBar />
    </div>
  );
}
