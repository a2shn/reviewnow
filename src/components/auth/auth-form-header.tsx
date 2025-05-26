import { GiDeathStar } from "react-icons/gi";

export function AuthFormHeader() {
  return (
    <div className="flex flex-col items-center gap-2">
      <a href="#" className="flex flex-col items-center gap-2 font-medium">
        <div className="flex size-8 items-center justify-center rounded-md">
          <GiDeathStar className="size-32 text-indigo-800" />
        </div>
        <span className="sr-only">Reviewnow.</span>
      </a>
    </div>
  );
}
