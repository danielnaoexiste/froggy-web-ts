import type { FC } from "react";

import { LandingContentInvite } from "./LandingContentInvite";
import { LandingContentFooter } from "./LandingContentFooter";
import { LandingContentModeration } from "./LandingContentModeration";
import { LandingContentInteraction } from "./LandingContentInteraction";
import { Box } from "@danielnaoexiste/froggy-components";

export const Landing: FC = () => (
  <Box
    color="white"
    display="flex"
    minHeight="100vh"
    flexDirection="column"
    justifyContent="space-between"
  >
    <LandingContentInvite />
    <LandingContentModeration />
    <LandingContentInteraction />
    <LandingContentFooter />
  </Box>
);
