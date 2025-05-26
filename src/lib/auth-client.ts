import { createAuthClient } from "better-auth/react";
import { magicLinkClient, oneTapClient } from "better-auth/client/plugins";
import { env } from "@/env";
export const authClient = createAuthClient({
  plugins: [
    magicLinkClient(),
    oneTapClient({
      clientId: env.AUTH_GOOGLE_ID,
    }),
  ],
});
