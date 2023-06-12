import * as tokenService from './tokenService'

import { Chair } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/chairs`

async function getChairs(): Promise<Chair[]> {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json() as Chair[]
}

export { getChairs }