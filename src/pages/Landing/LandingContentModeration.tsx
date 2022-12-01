import type { FC } from "react";

import Icon from "../../assets/froggy-moderation.png";

import { LandingContentImage } from "./LandingContentImage";

export const LandingContentModeration: FC = () => (
  <div className="w-full flex justify-center bg-slate-800">
    <div
      id="moderation-section"
      className="h-screen w-full lg:w-4/6 self-center flex flex-col lg:flex-row justify-center lg:justify-around items-center"
    >
      <div className="mb-8 w-full lg:mb-0 flex flex-col items-center ">
        <img
          src={Icon}
          alt="icon"
          className="transform-none lg:transform -skew-y-6 drop-shadow-lg rounded min-w-[340px] max-w-[400px] w-full h-full"
        />
      </div>
      <div
        className="sm:ml-0 lg:ml-4 flex flex-col justify-flex-end"
        style={{ minWidth: "256px" }}
      />

      <div className="mb-2 flex flex-col">
        <div className="flex justify-center lg:justify-start font-medium">
          <span className="text-2xl lg:text-5xl">Powerful</span>
          <span className="text-brand ml-4 text-2xl lg:text-5xl">
            Moderation
          </span>
        </div>

        <span className="pt-4 px-4 lg:px-0 text-center lg:text-left text-2xl">
          be in control of your community with simple yet powerful moderation
          utilities.
        </span>
      </div>
    </div>
  </div>
);
