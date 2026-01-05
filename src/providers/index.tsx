"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";
import { dark } from "@clerk/themes";

export function Providers({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <ClerkProvider appearance={{ theme: dark }}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ClerkProvider>
  );
}
