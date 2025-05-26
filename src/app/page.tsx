import { Menu } from "@/components/dashboard/menu";
import { ProjectsGrid } from "@/components/dashboard/projects-grid";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <Menu variant="inset" />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main py-6 flex flex-1 flex-col gap-2">
            <ProjectsGrid />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
