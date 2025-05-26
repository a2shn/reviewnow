import { ToggleTheme } from "../shared/toggle-theme";
import { SearchBar } from "../ui/search-bar";

export function DashboardHeader() {
  return (
    <div className="border-b-2 border-dashed px-4 py-2 flex items-center justify-between">
      <h1 className="text-base font-medium">User</h1>
      <div className="flex items-center gap-4">
        <SearchBar />
        <ToggleTheme />
      </div>
    </div>
  );
}
