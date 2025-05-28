import axios from 'axios'

export const fourSquarePlacesClient = axios.create({
  baseURL: 'https://api.foursquare.com/v3/places/search',
  method: 'GET',
  headers: {
    Authorization: process.env.FOURSQUARE_API_KEY,
  },
})
