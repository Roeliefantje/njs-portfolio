import Footer from "@/components/footer";
import Header from "@/components/header";
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

export default function Projects() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex-col flex gap-5 row-start-2 sm:items-start items-start w-full max-w-screen-md p-4">
        <a
          href="https://github.com/Roeliefantje/ultimate-voxel-engine"
          target="_blank"
          className="w-full"
        >
          <Card className="w-full max-w-screen-md p-0">
            <CardHeader className="">
              <CardTitle>The ultimate voxel engine</CardTitle>
              <CardDescription>
                A path tracing Voxel engine performant enough to render a
                seemingly infinite world.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row w-full justify-between">
              <div className="flex flex-row gap-1">
                <Badge>rust</Badge>
                <Badge>wgpu</Badge>
                <Badge variant="secondary">voxel engine</Badge>
                <Badge variant="secondary">path tracer</Badge>
                <Badge variant="outline" className="text-black">
                  WIP
                </Badge>
              </div>
              <div className=" text-right text-gray-800 gap-1 text-sm">
                Go to repository
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className=" fill-black inline h-4 w-4 pl-1"
                />
              </div>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://github.com/Roeliefantje/couple-crows"
          target="_blank"
          className="w-full"
        >
          <Card className="w-full max-w-screen-md p-0">
            <CardHeader className="">
              <CardTitle>Couple Crows</CardTitle>
              <CardDescription>
                Rendering more than 100k crows in the browser that simulate the
                boids algorithm.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row w-full justify-between">
              <div className="flex flex-row gap-1">
                <Badge>rust</Badge>
                <Badge>wgpu</Badge>
                <Badge>bevy</Badge>
                <Badge variant="secondary">webgpu</Badge>
                <Badge variant="secondary">simulation</Badge>
              </div>
              <div className=" text-right text-gray-800 gap-1 text-sm">
                Go to repository
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className=" fill-black inline h-4 w-4 pl-1"
                />
              </div>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://github.com/Roeliefantje/Craft"
          target="_blank"
          className="w-full"
        >
          <Card className="w-full max-w-screen-md p-0">
            <CardHeader className="">
              <CardTitle>Craft Optimization</CardTitle>
              <CardDescription>
                Optimizing a Minecraft clone written in C by about 50 times by
                using both high-level and low-level optimization techniques.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row w-full justify-between">
              <div className="flex flex-row gap-1">
                <Badge>C</Badge>
                <Badge>opengl</Badge>
                <Badge>simd</Badge>
                <Badge variant="secondary">optimization</Badge>
                <Badge variant="secondary">rendering</Badge>
              </div>
              <div className=" text-right text-gray-800 gap-1 text-sm">
                Go to repository
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className=" fill-black inline h-4 w-4 pl-1"
                />
              </div>
            </CardContent>
          </Card>
        </a>
      </main>
      <Footer />
    </div>
  );
}
