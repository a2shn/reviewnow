import { z } from "zod";

const emptySchema = z.object({});

const authSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Please enter a valid email address" }),
});

const createProjectSchema = z.object({
  title: z
    .string({ required_error: "Project title is required" })
    .min(2, { message: "Title must be at least 2 characters" })
    .max(10, { message: "Title must be at most 10 characters" }),

  description: z
    .string()
    .max(20, { message: "Description must be at most 20 characters" })
    .optional(),
});

export { authSchema, createProjectSchema, emptySchema };
