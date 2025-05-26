"use client";

import { GalleryVerticalEnd } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { authSchema } from "@/lib/form-schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "../../../auth";

export function AuthForm() {
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof authSchema>) => {
    "use server";

    const formData = new FormData();
    formData.append("email", values.email);

    await signIn("resend", formData);
  };

  return (
    <div className={"flex flex-col gap-6"}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <a href="#" className="flex flex-col items-center gap-2 font-medium">
            <div className="flex size-8 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-6" />
            </div>
            <span className="sr-only">Reviewnow.</span>
          </a>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-6">
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="bg-background text-muted-foreground relative z-10 px-2">
          Or
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Button variant="outline" type="button" className="w-full">
          Continue with Apple
        </Button>
        <Button variant="outline" type="button" className="w-full">
          Continue with Google
        </Button>
      </div>

      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
