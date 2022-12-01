import type { FC } from "react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import type { IGuild } from "../../../interfaces";
import { useDiscord } from "../../../utils/useDiscord";

interface IServerCardProps {
  guild: IGuild;
  intersection: Array<string>;
}

enum ButtonTypes {
  Setup = "setup",
  Invite = "invite",
}

export const ServerSelectionCard: FC<IServerCardProps> = ({
  guild = {} as IGuild,
  intersection = [],
}) => {
  const navigate = useNavigate();
  const { getGuildIcon } = useDiscord();

  const roleLabel = useMemo(() => (guild.owner ? "owner" : "admin"), [guild]);

  const buttonType = useMemo(
    () =>
      intersection.includes(guild.id) ? ButtonTypes.Setup : ButtonTypes.Invite,
    [guild]
  );

  const serverIcon = useMemo(() => getGuildIcon(guild), [guild]);

  const handleClick = () => {
    if (buttonType === ButtonTypes.Setup) {
      navigate("/dashboard");
    }

    if (buttonType === ButtonTypes.Invite) {
      window.open(
        `${import.meta.env.VITE_INVITE_URL}&guild_id=${guild.id}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <div
          className="absolute z-10 w-full h-full opacity-30 blur-sm rounded-2xl"
          style={{
            background: !!serverIcon
              ? `url(${serverIcon}) center center / cover no-repeat`
              : "gray",
          }}
        />

        <div className="flex justify-center items-center w-full h-52">
          <img
            src={serverIcon}
            alt={guild.name}
            className="blur-0 z-20 w-16 h-16"
          />
        </div>
      </div>

      <div className="flex justify-between my-2">
        <div className="flex flex-col">
          <span className="text-brand font-medium">{guild.name}</span>
          <span className="font-medium">{roleLabel}</span>
        </div>

        <Button onClick={() => handleClick()}>{buttonType}</Button>
      </div>
    </div>
  );
};
