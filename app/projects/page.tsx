import Footer from "@/components/footer";
import Header from "@/components/header";
import { ProjectCard, ProjectCardProps } from "@/components/project_card";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const projects: ProjectCardProps[] = [
  {
    href: "https://github.com/Roeliefantje/ultimate-voxel-engine",
    title: "The ultimate voxel engine",
    description:
      "A path tracing Voxel engine performant enough to render a seemingly infinite world.",
    badges: [
      { label: "rust" },
      { label: "wgpu" },
      { label: "voxel engine", variant: "secondary" },
      { label: "path tracer", variant: "secondary" },
      { label: "WIP", variant: "outline", className: "text-black" },
    ],
    imageSrc: "/textures/grass_atlas.png",
    imageAlt: "Voxel Engine Preview"
  },
  {
    href: "https://github.com/Roeliefantje/couple-crows",
    title: "Couple Crows",
    description:
      "Rendering more than 100k crows in the browser that simulate the boids algorithm.",
    badges: [
      { label: "rust" },
      { label: "wgpu" },
      { label: "bevy" },
      { label: "webgpu", variant: "secondary" },
      { label: "simulation", variant: "secondary" },
    ],
    imageSrc: "/textures/GRASS.png",
    imageAlt: "Voxel Engine Preview"
  },
  {
    href: "https://github.com/Roeliefantje/Craft",
    title: "Craft Optimization",
    description:
      "Optimizing a Minecraft clone written in C by @fogleman. Increasing performance by about 50 times using both high-level and low-level optimization techniques.",
    badges: [
      { label: "C" },
      { label: "opengl" },
      { label: "simd" },
      { label: "optimization", variant: "secondary" },
      { label: "rendering", variant: "secondary" },
    ],
    imageSrc: "/textures/grass_singular.png",
    imageAlt: "Voxel Engine Preview"
  },
];

export default function Projects() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />

      <main className="flex flex-col gap-5 row-start-2 w-full max-w-screen-md p-4">
        {projects.map((project) => (
          <ProjectCard key={project.href} {...project} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
