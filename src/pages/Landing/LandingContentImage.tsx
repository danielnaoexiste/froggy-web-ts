import type { FC } from "react";

interface ImageProps {
  src: string;
}

export const LandingContentImage: FC<ImageProps> = ({ src }) => (
  <div className="mb-8 lg:mb-0 flex flex-col items-center w-72">
    <img src={src} alt="icon" className="rounded-full w-full h-full" />
  </div>
);
