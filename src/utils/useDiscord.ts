const URL = 'https://cdn.discordapp.com'

import type { IGuild } from "../interfaces";

const getGuildIcon = (guild: IGuild) => {
  console.log(guild, guild.icon)
  return guild.icon 
  ? `${URL}/icons/${guild.id}/${guild.icon}.png`
  : `${URL}/embed/avatars/${Math.floor(Math.random() * 6)}.png`
}

export const useDiscord = () => ({
  getGuildIcon
})