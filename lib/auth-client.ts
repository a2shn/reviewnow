import { createAuthClient } from "better-auth/react";
import { magicLinkClient } from "better-auth/client/plugins";
import { env } from "@/env";
export const authClient = createAuthClient({
  plugins: [magicLinkClient()],
});
