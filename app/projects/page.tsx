import Footer from "@/components/footer";
import Header from "@/components/header";
import { ProjectCard, ProjectCardProps } from "@/components/project_card";


export const projects: ProjectCardProps[] = [
  {
    href: "https://github.com/Roeliefantje/ultimate-voxel-engine",
    title: "Vulkan voxel ray marcher",
    description:
      "A path tracing Voxel engine developed for my Master thesis, utilizes levels of detail and chunking to support seemingly infinite worlds.",
    badges: [
      { label: "vulkan" },
      { label: "c++" },
      { label: "voxel engine", variant: "secondary" },
      { label: "path tracer", variant: "secondary" },
      // { label: "WIP", variant: "outline", className: "text-black" },
    ],
    imageSrc: "/project-previews/voxel-engine.png",
    imageAlt: "Voxel Engine Preview"
  },
  {
    href: "https://github.com/Roeliefantje/zig-opengl",
    title: "Post processing Pixel sorter",
    description:
      "A small post processing effect created in zig and opengl that uses pixel sorting combined with a filter to create an interesting effect.",
    badges: [
      { label: "opengl" },
      { label: "zig" },
      { label: "shaders", variant: "secondary" },
      { label: "post processing", variant: "secondary" },
      // { label: "WIP", variant: "outline", className: "text-black" },
    ],
    imageSrc: "/project-previews/zig-opengl.png",
    imageAlt: "Post Processing Pixel sorter Preview"
  },
  {
    href: "https://chrispies.itch.io/rumbash",
    title: "Rumbash",
    description: 
      "A small game made for Brackeys Game Jam 2025.1",
    badges: [
      { label: "C#" },
      { label: "Unity" },
      { label: "Gamejam", variant: "secondary" },
      // { label: "path tracer", variant: "secondary" },
      // { label: "WIP", variant: "outline", className: "text-black" },
    ],
    imageSrc: "/project-previews/roombash.png",
    imageAlt: "Roombash thumbnail"
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
    imageSrc: "/project-previews/couple-crows.png",
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
    imageSrc: "/project-previews/craft.png",
    imageAlt: "Voxel Engine Preview"
  },
];

export default function Projects() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <Header />

      <main className="flex flex-col gap-5 row-start-2 w-full max-w-screen-md p-4 overflow-auto scrollbar-thin-custom" style={{ maxHeight: 'calc(100vh - (32px + 80px) - (56px + 80px + 80px)'}}>
        {projects.map((project) => (
          <ProjectCard key={project.href} {...project} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
