import type { FC } from "react";

import Icon from "../../assets/icon.png";

export const LandingContentInteraction: FC = () => (
  <div
    id="interaction-section"
    className="h-section w-full lg:w-5/6 self-center flex flex-col lg:flex-row-reverse justify-center lg:justify-around items-center"
  >
    <div className="mb-8 lg:mb-0 flex flex-col items-center">
      <img
        src={Icon}
        alt="icon"
        width={200}
        height={200}
        className="rounded-full"
      />
    </div>

    <div
      className="sm:ml-0 lg:ml-4 flex flex-col justify-flex-end"
      style={{ minWidth: "256px" }}
    />

    <div className="mb-2 flex flex-col">
      <div className="flex justify-center lg:justify-start">
        <span className="text-brand text-2xl lg:text-5xl">Fun</span>
        <span className="ml-4 text-2xl lg:text-5xl">Interactions</span>
      </div>
      <span className="pt-4 text-center lg:text-left text-2xl">
        let members engage with fun anime reactions and interactions.
      </span>
    </div>
  </div>
);
