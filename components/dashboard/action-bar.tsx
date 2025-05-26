import { SearchBar } from "../ui/search-bar";
import { CreateProjectDialog } from "./create-project-dialog";

export function ActionBar() {
  return (
    <div className="flex items-center gap-6 border-b-2 border-dashed px-6 py-4">
      <CreateProjectDialog />
      <SearchBar />
    </div>
  );
}
