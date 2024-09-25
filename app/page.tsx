"use client"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedinIn, faItchIo, faLinkedin, faYoutubeSquare, faXingSquare, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
// import { useRouter } from "next/router"
import {useRouter} from "next/navigation"
import Footer from "@/components/footer"

export default function Home() {
  const router = useRouter();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center sm:items-start">
        <div className="flex text-center font-bold text-8xl">
          Roeliefantje
        </div>
        <div className="flex text-pretty justify-center max-w-screen-md">
          <p> Current part‑time Software Engineer at start‑up company Twiki Solutions. Working as a project lead primarily focused on developing backend
microservices. Master of science student in Game and Media Technology at Utrecht University. Enjoy most things tech and love messing around
and solving problems. Most passionate about Graphics development and low‑level code, usually videogame related.</p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button className="fill-white" onClick={() => router.push("/projects")}>Projects</Button>
          <Button variant="secondary" className="border border-red-800" onClick={() => router.push("/contact")}> Contact Me</Button>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
