"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { TooltipProvider } from "./ui/tooltip";

export default function ProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SessionProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </SessionProvider>
  );
}
