import { MagicLinkForm } from "@/components/auth/magic-link-form";
import { TermsAndPrivacy } from "@/components/auth/terms-and-privacy";
import { PageCentered } from "@/components/ui/page";
import { Logo } from "@/components/ui/logo";
import { ErrorAlert } from "@/components/ui/error-alert";
import { GithubAuth } from "@/components/auth/github-auth";
import { GoogleAuth } from "@/components/auth/google-auth";

export default function AuthPage() {
  return (
    <PageCentered>
      <div className="w-full max-w-sm">
        <div className={"flex flex-col gap-6"}>
          <Logo />
          <ErrorAlert />
          <MagicLinkForm />

          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <GithubAuth />
            <GoogleAuth />
          </div>
          <TermsAndPrivacy />
        </div>
      </div>
    </PageCentered>
  );
}
