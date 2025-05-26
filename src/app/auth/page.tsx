import { OAuth } from "@/components/auth/oauth";
import { MagicLinkForm } from "@/components/auth/magic-link-form";
import { TermsAndPrivacy } from "@/components/auth/terms-and-privacy";
import { PageCentered } from "@/components/ui/page";
import { Logo } from "@/components/ui/logo";
import { ErrorAlert } from "@/components/ui/error-alert";

export default function AuthPage() {
  return (
    <PageCentered>
      <div className={"flex flex-col gap-6"}>
        <Logo />
        <ErrorAlert />
        <MagicLinkForm />

        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or
          </span>
        </div>

        <OAuth />
        <TermsAndPrivacy />
      </div>
    </PageCentered>
  );
}
