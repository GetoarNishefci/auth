"use client";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await fetch("/api/signout", { method: "POST" });
    router.push("/auth/login");
  };

  return <button style={{ backgroundColor: "red", color: "white", border: "none", padding: "8px 12px", borderRadius: "4px" }} onClick={handleSignOut}>Sign out</button>;
};

export default SignOutButton;
