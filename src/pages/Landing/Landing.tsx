import type { FC } from "react";

import { LandingContentInvite } from "./LandingContentInvite";
import { LandingContentFooter } from "./LandingContentFooter";
import { LandingContentModeration } from "./LandingContentModeration";
import { LandingContentInteraction } from "./LandingContentInteraction";

export const Landing: FC = () => (
  <div className="flex flex-col min-h-screen justify-between text-white">
    <LandingContentInvite />
    <LandingContentModeration />
    <LandingContentInteraction />
    <LandingContentFooter />
  </div>
);
