export interface IGuild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: string[];
}

export interface IUserGuilds {
  adminGuilds: IGuild[];
  mutualGuilds: IGuild[];
}