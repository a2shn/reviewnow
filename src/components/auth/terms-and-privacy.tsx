import { routes } from "@/lib/routes";

export function TermsAndPrivacy() {
  return (
    <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
      By clicking continue, you agree to our{" "}
      <a href={routes.terms}>Terms of Service</a> and{" "}
      <a href={routes.privacy}>Privacy Policy</a>.
    </div>
  );
}
