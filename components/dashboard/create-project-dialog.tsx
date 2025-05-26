import { Sparkles, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RainbowButton } from "../magicui/rainbow-button";
import { Separator } from "../ui/separator";

export function CreateProjectDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <RainbowButton size="sm" variant="outline" className="rounded-sm">
          <Sparkles /> <Separator orientation="vertical" /> Create Project
        </RainbowButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
            <Sprout className="h-8 w-8" />
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Create Your Project
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            A journey of a thousand miles begins with a single step
          </DialogDescription>
        </DialogHeader>

        <form>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="project-name" className="text-sm font-medium">
                Project Name
              </Label>
              <Input
                id="project-name"
                placeholder="My Awesome Project"
                className="h-11"
              />
              <p className="text-xs text-muted-foreground">
                Choose a memorable name that reflects your project's purpose
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium">
                Description
              </Label>
              <Input
                id="description"
                placeholder="Describe what your project does, its goals, and what makes it special..."
              />
              <p className="text-xs text-muted-foreground">
                Give a brief description
              </p>
            </div>
          </div>

          <Button className="flex-1 sm:flex-none">
            <Sparkles className="mr-2 h-4 w-4" />
            Create Project
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
