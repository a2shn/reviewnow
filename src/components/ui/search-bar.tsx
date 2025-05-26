"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

export function SearchBar({ className, onSearch, ...props }: SearchBarProps) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("relative w-48 md:w-full md:max-w-xs", className)}
    >
      <Input
        type="text"
        placeholder="Search..."
        className="pr-10 h-8 min-h-8 py-1 text-sm"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
      <Button
        type="submit"
        size="icon"
        variant="ghost"
        className="absolute right-0 top-0 h-8 px-3 text-muted-foreground hover:text-foreground"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
}
