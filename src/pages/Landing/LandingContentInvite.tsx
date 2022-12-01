import type { FC } from "react";
import { useCallback } from "react";

import Icon from "../../assets/icon.png";
import Button from "../../components/Button";

import { FaDiscord } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

import { LandingContentImage } from "./LandingContentImage";

export const LandingContentInvite: FC = () => {
  const redirect = useCallback(() => {
    window.location.href = import.meta.env.VITE_DISCORD_REDIRECT;
  }, []);

  const invite = useCallback(() => {
    window.open(
      import.meta.env.VITE_INVITE_URL,
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  return (
    <section
      id="invite-section"
      className="h-section w-full lg:w-4/6 self-center flex flex-col lg:flex-row-reverse justify-center lg:justify-around items-center"
    >
      <LandingContentImage src={Icon} />

      <div
        className="sm:ml-0 lg:ml-4 flex flex-col justify-flex-end"
        style={{ minWidth: "256px" }}
      />

      <div className="mb-2 w-5/6 flex flex-col">
        <div className="flex justify-center lg:justify-start font-medium">
          <span className="text-brand text-2xl lg:text-5xl">Froggy</span>
          <span className="ml-4 text-2xl lg:text-5xl">Bot</span>
        </div>

        <span className="pt-4 px-4 lg:px-0 text-center lg:text-left text-2xl">
          customizable general purpose bot for moderators and anime fans.
        </span>

        <div className="flex my-4 gap-2 justify-center lg:justify-start">
          <Button onClick={() => invite()} PrefixIcon={FaDiscord}>
            invite
          </Button>
          <Button onClick={() => redirect()} PrefixIcon={MdSettings}>
            dashboard
          </Button>
        </div>
      </div>
    </section>
  );
};
