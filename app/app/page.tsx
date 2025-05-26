import { ActionBar } from "@/components/dashboard/action-bar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ProjectsGrid } from "@/components/dashboard/projects-grid";
import { Protect } from "@/components/shared/guard";

export default function DashboardPage() {
  return (
    <Protect>
      <div className="h-svh md:p-6 md:bg-sidebar">
        <div className="min-h-full bg-background md:rounded-2xl @container/main flex flex-col w-full">
          <DashboardHeader />
          <ActionBar />
          <div className="flex flex-1 flex-col">
            <div className="@container/main py-6 flex flex-1 flex-col gap-2">
              <ProjectsGrid />
            </div>
          </div>
        </div>
      </div>
    </Protect>
  );
}
