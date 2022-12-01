import axios from 'axios'
import type { AxiosResponse } from 'axios';

import { useQuery } from 'react-query'
import type { IUserGuilds } from '../../interfaces'

const URL = import.meta.env.VITE_API_URL

export const useQueryGuilds = (options = {}) => 
  useQuery<IUserGuilds, Error>(
    ['queryGuilds'], 
    () => 
      axios.get<IUserGuilds>(`${URL}/discord/guilds`, { withCredentials: true })
        .then((result: AxiosResponse) => result.data)
        .catch((e: Error)=> console.error(e)),
    { ...options }
  )
