"use server";

import { db } from "@/db";
import { project } from "@/db/schema";
import { auth } from "@/lib/auth";
import { routes } from "@/lib/routes";
import { withQuery } from "@/lib/utils";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function createProjectAction(_: any, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user.id)
    return { success: false, message: "Session was not found" };

  const projectConstruct: typeof project.$inferInsert = {
    title,
    description,
    userId: session.user.id,
  };

  const { data, error } = await withQuery(
    db.insert(project).values(projectConstruct).returning(),
  );

  if (error) return { success: false, message: "Oops! Retry again later" };

  redirect(routes.project(data[0].id));
}

export { createProjectAction };
