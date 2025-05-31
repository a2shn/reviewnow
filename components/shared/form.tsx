"use client";

import { useActionState, createContext, useContext, useEffect } from "react";
import { ZodType } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loading } from "./loading";
import { ErrorAlert } from "./error-alert";
import { toast } from "sonner";
import { VariantProps } from "class-variance-authority";

type FormResult = {
  values: Record<string, any>;
  errors: Record<string, string[]>;
  success: boolean;
  message?: string;
};

const FormContext = createContext<FormResult | null>(null);

function useFormContext() {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("Field must be used within a Form");
  return ctx;
}

interface FormProps {
  schema: ZodType<any>;
  action: (prevState: any, values: any) => Promise<any>;
  children: React.ReactNode;
  className?: string;
}

export function Form({ schema, action, className, children }: FormProps) {
  const initialState: FormResult = {
    values: {},
    errors: {},
    success: false,
    message: undefined,
  };

  const [state, formAction] = useActionState(
    async (_prev: any, formData: FormData) => {
      const values = Object.fromEntries(formData.entries());
      const result = schema.safeParse(values);

      if (!result.success) {
        const errorMap = result.error.flatten().fieldErrors;
        return { values, errors: errorMap, success: false };
      }

      return await action(_prev, formData);
    },
    initialState,
  );

  useEffect(() => {
    if (state?.success === true)
      toast.success(state.message, { duration: Infinity, dismissible: false });
  }, [state]);

  return (
    <form action={formAction} className={className}>
      <FormContext.Provider value={state}>{children}</FormContext.Provider>
    </form>
  );
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  className?: string;
}

export function Field({ name, label, className, ...props }: FieldProps) {
  const { values, errors } = useFormContext();

  return (
    <div className={cn("space-y-2", className)}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        id={name}
        name={name}
        defaultValue={values?.[name] ?? ""}
        {...props}
      />
      {errors?.[name] && (
        <p className="text-sm text-red-700">{errors[name].join(", ")}</p>
      )}
    </div>
  );
}

interface FormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  variant: "outline" | "default";
}

export function FormButton({ children, className, variant }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      className={className}
      type="submit"
      disabled={pending}
      variant={variant}
    >
      {pending ? (
        <div className="flex gap-2 items-center justify-center">
          <Loading />
          <p> Please wait ... </p>
        </div>
      ) : (
        children
      )}
    </Button>
  );
}

export function FormMessage() {
  const { success, message } = useFormContext();

  if (success || !message) return null;

  return <ErrorAlert message={message} />;
}
