import axios from 'axios'
import type { AxiosResponse } from 'axios';

import { useQuery } from 'react-query'
import type { IUserDetails } from '../../interfaces'

const URL = import.meta.env.VITE_API_URL

export const useQueryStatus = (options = {}) => 
  useQuery<IUserDetails, Error>(
    ['queryStatus'], 
    () => 
      axios.get<IUserDetails>(`${URL}/auth/status`, { withCredentials: true })
        .then((result: AxiosResponse) => result.data),
    { ...options }
  )
