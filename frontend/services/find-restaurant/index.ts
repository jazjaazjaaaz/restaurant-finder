import { apiClient } from '../api-client'

export const findRestaurant = async (message: string) => {
  try {
    return await apiClient.post('/execute', { message })
  } catch (err: any) {
    throw err
  }
}
