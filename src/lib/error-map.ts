export enum ErrorMap {
  Configuration = "Configuration",
  AccessDenied = "AccessDenied",
  Verification = "Verification",
  Default = "Default",
}

export const errorMap: Record<ErrorMap, string> = {
  [ErrorMap.Configuration]: "There was a problem when trying to authenticate.",
  [ErrorMap.AccessDenied]:
    "Access was denied. This usually happens if access was restricted in a sign-in or redirect callback.",
  [ErrorMap.Verification]:
    "Email verification failed. The link may have expired or already been used.",
  [ErrorMap.Default]:
    "An unknown error occurred. Please try again or contact support.",
};
