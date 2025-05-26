import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    AUTH_FROM_MAIL: z.string().email(),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    AUTH_FROM_MAIL: process.env.AUTH_FROM_MAIL,
  },
});
