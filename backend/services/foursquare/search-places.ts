import { fourSquarePlacesClient } from './client'

type SearchPlacesQuery = {
  query: string
  near: string
  open_now: boolean
}

export const searchPlaces = async (query: SearchPlacesQuery): Promise<any[]> => {
  try {
    const { data } = await fourSquarePlacesClient({
      params: {
        fields: 'name,location,categories,rating,price,hours',
        categories: '63be6904847c3692a84b9bb5',
        ...query,
        near: query.near || 'me'
      }
    })

    return data.results
  } catch (err: any) {
    const errorDataMessage: string = err.response?.data?.message ?? ''

    // retry with updated near parameter if location cannot be determined
    if (errorDataMessage.includes('Boundaries could not be determined for near param')) {
      return searchPlaces({
        ...query,
        near: 'me',
      })
    }

    throw err
  }
}
