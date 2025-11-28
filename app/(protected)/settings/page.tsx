"use client";

import { signOut } from "next-auth/react";

export default function SettingsPage({ session }: { session: any }) {
  return (
    <div>
      {JSON.stringify(session)}
      <button
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
      >
        Sign out
      </button>
    </div>
  );
}
