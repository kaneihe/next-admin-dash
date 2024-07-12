// src/components/user.tsx
"use client"; // 注意: 告诉 Next.js 这是一个客户端组件

import { signIn, signOut, getSession } from "next-auth/react";
import { Button } from "./components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Session } from "next-auth";

export function User() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    (async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    })();
  }, []);

  const user = session?.user;

  if (!user) {
    return (
      <Button
        variant={"destructive"}
        onClick={async () => {
          await signIn("github");
        }}
      >
        Sign In
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Button
        variant={"destructive"}
        onClick={async () => {
          await signOut();
        }}
      >
        Sign Out
      </Button>
      {user.image && (
        <Image
          className="h-8 w-8 rounded-full"
          src={user.image}
          height={32}
          width={32}
          alt={`${user.name} avatar`}
        />
      )}
    </div>
  );
}
