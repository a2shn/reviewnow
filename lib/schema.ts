import { z } from "zod";

const authSchema = z
  .string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  })
  .email({ message: "Please enter a valid email address" });

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

export { authSchema, createProjectSchema };
