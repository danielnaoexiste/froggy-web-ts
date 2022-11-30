import type { FC } from "react";
import { useCallback } from "react";

import Icon from "../../assets/icon.png";
import Button from "../../components/Button";

import { FaDiscord } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

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

      <div className="mb-2 w-5/6 flex flex-col">
        <div className="flex justify-center lg:justify-start">
          <span className="text-brand text-2xl lg:text-5xl">Froggy</span>
          <span className="ml-4 text-2xl lg:text-5xl">Bot</span>
        </div>
        <span className="pt-4 text-center lg:text-left text-2xl">
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
