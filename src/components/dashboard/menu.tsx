"use client";

import { Projects } from "@/components/dashboard/projects";
import { Panel } from "@/components/dashboard/panel";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function Menu({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <span className="text-base font-semibold">Dashboard</span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <Projects />
        <Panel />
      </SidebarContent>
    </Sidebar>
  );
}
