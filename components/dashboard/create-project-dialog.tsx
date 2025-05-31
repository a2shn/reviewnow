"use client";

import { Sparkles, Sprout } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RainbowButton } from "../magicui/rainbow-button";
import { Separator } from "../ui/separator";
import { createProjectAction } from "@/actions/project";
import { Field, Form, FormButton, FormMessage } from "../shared/form";
import { createProjectSchema } from "@/lib/schema";

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

        <Form
          className="grid gap-12 py-4"
          schema={createProjectSchema}
          action={createProjectAction}
        >
          <FormMessage />

          <Field
            name="title"
            label="Project Title"
            placeholder="My Awesome Project"
            className="h-11"
          />

          <Field
            name="description"
            id="description"
            label="Project Description"
            placeholder="Describe what your project does"
          />

          <FormButton className="flex-1 sm:flex-none w-full">
            <Sparkles className="mr-2 h-4 w-4" />
            Create Project
          </FormButton>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
