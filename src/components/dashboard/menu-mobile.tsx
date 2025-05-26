"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PanelLeft } from "lucide-react";
import { Projects } from "./projects";
import { Panel } from "./panel";

export function MenuMobile() {
  return (
    <div className="md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost">
            <PanelLeft />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="p-4 gap-6 flex flex-col min-h-96">
            <DrawerTitle className="sr-only">Menu</DrawerTitle>
            <Projects />

            <DrawerFooter>
              <Panel />
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
