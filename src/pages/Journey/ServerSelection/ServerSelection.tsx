import { useMemo } from "react";
import { useQueryGuilds } from "../../../service/guilds";

import LoaderBox from "../../../components/LoaderBox";
import { ServerSelectionCard } from "./ServerSelectionCard";

import type { FC } from "react";
import type { IUserGuilds } from "../../../interfaces";

export const ServerSelection: FC = () => {
  const { data = {} as IUserGuilds, isFetching } = useQueryGuilds();

  const { adminGuilds = [], mutualGuilds = [] } = data;

  const intersection = useMemo(() => {
    if (adminGuilds && mutualGuilds) {
      const adminIds = adminGuilds?.map((guild) => guild.id);
      const mutualIds = mutualGuilds?.map((guild) => guild.id);
      return adminIds?.filter((id) => mutualIds.includes(id));
    }
    return [];
  }, [adminGuilds, mutualGuilds]);

  if (isFetching) return <LoaderBox />;

  return (
    <div className="flex h-screen items-center flex-col justify-center pt-6 px-12">
      <span className="text-center text-5xl font-semibold">select server</span>

      <div className="my-11 grid gap-8 w-full grid-cols-server">
        {adminGuilds.map((guild) => (
          <ServerSelectionCard
            key={guild.id}
            guild={guild}
            intersection={intersection}
          />
        ))}
      </div>
    </div>
  );
};
