"use client";

import { X } from "lucide-react";
import { Separator } from "../ui/separator";

interface ErrorAlertProps {
  message: string;
}

export function ErrorAlert({ message }: ErrorAlertProps) {
  return (
    <div className="flex items-center gap-3 p-2 bg-background border border-red-700 border-dashed shadow-sm max-w-full">
      <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center bg-red-700 shadow-inner">
        <X className="size-4" />
      </div>
      <Separator orientation="vertical" />
      <span className="font-medium text-sm truncate overflow-hidden overflow-ellipsis">
        {message}
      </span>
    </div>
  );
}
