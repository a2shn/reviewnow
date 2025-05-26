"use client";

import { z } from "zod";

const authSchema = z.object({
  email: z.string().email(),
});

export { authSchema };
