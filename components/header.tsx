"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="row-start-1 flex justify-between items-center p-4 w-full max-w-screen-md">
      <div className="flex-shrink-0">
        <Button
          variant={"secondary"}
          className="border border-red-800"
          onClick={() => router.push("/")}
        >
          Back to Homepage
        </Button>
      </div>

      <div className="flex gap-4 ml-auto">
        <Button onClick={() => router.push("/")}>Projects</Button>
        <Button className="fill-white" onClick={() => router.push("/projects")}>
          Blog
        </Button>
        <Button
          variant={"secondary"}
          className="border border-red-800"
          onClick={() => router.push("/contact")}
        >
          Contact Me
        </Button>
      </div>
    </header>
  );
}
