import type { FC } from "react";

import Icon from "../../assets/icon.png";

import { LandingContentImage } from "./LandingContentImage";

export const LandingContentInteraction: FC = () => (
  <div
    id="interaction-section"
    className="h-section w-full lg:w-4/6 self-center flex flex-col lg:flex-row-reverse justify-center lg:justify-around items-center"
  >
    <LandingContentImage src={Icon} />

    <div
      className="sm:ml-0 lg:ml-4 flex flex-col justify-flex-end"
      style={{ minWidth: "256px" }}
    />

    <div className="mb-2 flex flex-col">
      <div className="flex justify-center lg:justify-start font-medium">
        <span className="text-brand text-2xl lg:text-5xl">Fun</span>
        <span className="ml-4 text-2xl lg:text-5xl">Interactions</span>
      </div>
      <span className="pt-4 text-center lg:text-left text-2xl">
        let members engage with fun anime reactions and interactions.
      </span>
    </div>
  </div>
);
