import Footer from "@/components/footer";
import Header from "@/components/header";

import {
  Card,
//   CardContent,
  CardDescription,
//   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Projects() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex-col flex gap-5 row-start-2 sm:items-start items-start w-full max-w-screen-md p-4">
        <Card className="w-full max-w-screen-md">
          <CardHeader className="">
            <CardTitle>The ultimate voxel engine</CardTitle>
            <CardDescription>A path tracing Voxel engine performant enough to render a seemingly infinite world.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full max-w-screen-md">
          <CardHeader className="">
            <CardTitle>Couple crows</CardTitle>
            <CardDescription>Rendering more than 100k crows in the browser that use the boids algorithm.</CardDescription>
          </CardHeader>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
