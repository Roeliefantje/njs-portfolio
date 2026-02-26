import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export type BadgeItem = {
  label: string;
  variant?: "default" | "secondary" | "outline";
  className?: string;
};

export type ProjectCardProps = {
  href: string;
  title: string;
  description: string;
  badges: BadgeItem[];
  imageSrc?: string;
  imageAlt?: string;
};

export function ProjectCard({
  href,
  title,
  description,
  badges,
  imageSrc,
  imageAlt,
}: ProjectCardProps) {
  return (
    <a href={href} target="_blank" className="w-full">
        {/* <div className="overflow-hidden rounded-lg"> */}
      <Card className="w-full max-w-screen-md p-0 flex flex-row transform transition-transform duration-200 hover:scale-95 will-change-transform">
        {/* Left side: all text content */}
        <div className="flex-1 flex flex-col justify-between">
          {/* <div> */}
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>

            {/* Badges */}
            <div className="flex flex-wrap gap-1 p-4 mt-auto">
              {badges.map((badge) => (
                <Badge
                  key={badge.label}
                  variant={badge.variant}
                  className={badge.className}
                >
                  {badge.label}
                </Badge>
              ))}
            </div>
          {/* </div> */}
        </div>

        {/* Right side: image */}
        {imageSrc && (
          <div className="flex-shrink-0 w-40 h-40 m-1 border border-black/55 rounded-lg">
            <Image
              src={imageSrc}
              alt={imageAlt || `${title} preview`}
              width={256} // adjust as needed
              height={256} // adjust as needed
              className="h-full w-full rounded-lg"
            />
          </div>
        )}
      </Card>
      {/* </div> */}
    </a>
  );
}
