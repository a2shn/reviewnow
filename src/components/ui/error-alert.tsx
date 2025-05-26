"use client";

import { useSearchParams } from "next/navigation";
import { IoMdClose } from "react-icons/io";

interface ErrorAlertProps {
  message?: string;
}

export function ErrorAlert({ message = undefined }: ErrorAlertProps) {
  const params = useSearchParams();
  const error = params.get("error");

  return (
    <div className="flex items-center gap-3 rounded-xl p-2 bg-gradient-to-r from-red-50 to-rose-50 text-red-600 border-2 border-red-200 shadow-sm max-w-full">
      <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-inner">
        <IoMdClose className="h-4 w-4" />
      </div>
      <span className="font-medium text-sm truncate overflow-hidden overflow-ellipsis">
        {message || error}
      </span>
    </div>
  );
}
