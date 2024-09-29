"use client";
import { Button } from "@/components/ui/button";
// import { useRouter } from "next/router"
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const router = useRouter();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center sm:items-start">
        <div className="flex flex-row font-bold text-5xl pb-0 pl-0 text-left w-screen-md w-full justify-between">
          <div className="flex flex-col font-bold text-5xl pb-0 pl-0 text-left w-screen-md">
            Roel de Jeu
            <div className="flex flex-row justify-between">
              <div className="text-sm font-mono text-right pl-0">
                Graphics Programmer | Software Engineer
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-end">
            <div className="flex flex-row justify-end gap-1">
              <Badge variant="secondary">OpenGL</Badge>
              <Badge variant="secondary">wgpu</Badge>
              <Badge variant="secondary">DirectX</Badge>
              <Badge variant="secondary">Unity</Badge>
              <Badge variant="secondary">GoDot</Badge>
            </div>
            <div className="flex flex-row justify-end gap-1">
              <Badge>rust</Badge>
              <Badge>C</Badge>
              <Badge>C++</Badge>
              <Badge>C#</Badge>
              <Badge>python</Badge>
            </div>
          </div>
        </div>

        <div className="flex text-pretty justify-center max-w-screen-md">
          <p>
            Current part‑time Software Engineer and Project lead at start‑up
            company Twiki Solutions primarily focused on developing backend
            microservices. Master of science student in Game and Media
            Technology at Utrecht University. Enjoy most things tech and love
            messing around with tech and solving problems. Most passionate about
            Graphics development and low‑level code, usually videogame related.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button
            className="fill-white"
            onClick={() => router.push("/projects")}
          >
            Projects
          </Button>
          <Button className="fill-white" onClick={() => router.push("/blog")}>
            Blog
          </Button>
          <Button
            variant="secondary"
            className="border border-red-800"
            onClick={() => router.push("/contact")}
          >
            Contact Me
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
