import { MagicLinkForm } from "@/components/auth/magic-link-form";
import { TermsAndPrivacy } from "@/components/auth/terms-and-privacy";
import { Logo } from "@/components/shared/logo";
import { GithubAuth } from "@/components/auth/github-auth";
import { GoogleAuth } from "@/components/auth/google-auth";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { ShineBorder } from "@/components/magicui/shine-border";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

export default function AuthPage() {
  return (
    <div className="@container-normal min-h-svh flex items-center justify-center">
      <FlickeringGrid
        className="absolute z-0 inset-0 right-0 top-0"
        squareSize={5}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.2}
        flickerChance={0.5}
      />
      <Card className="relative w-full max-w-md z-10 m-2">
        <ShineBorder shineColor={["#fff", "#000"]} />

        <CardHeader>
          <Logo />
          <CardTitle>Login to your account.</CardTitle>
        </CardHeader>
        <CardContent>
          <MagicLinkForm />

          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              Or
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <GithubAuth />
            <GoogleAuth />
          </div>
        </CardContent>

        <CardFooter>
          <TermsAndPrivacy />
        </CardFooter>
      </Card>
    </div>
  );
}
