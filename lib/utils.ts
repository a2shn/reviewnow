import { clsx, type ClassValue } from "clsx";
import { QueryPromise } from "drizzle-orm";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type QueryError = Error & { code?: unknown };

async function withQuery<D, P extends QueryPromise<D>>(promise: P) {
  try {
    const result = await promise;
    return { data: result, error: null };
  } catch (e) {
    if (e instanceof Error) {
      return { data: null, error: e as QueryError };
    } else {
      throw e;
    }
  }
}

export { withQuery, cn };
