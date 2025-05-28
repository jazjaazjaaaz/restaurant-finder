import { RequestHandler } from 'express'
import { findRestaurant } from '$services/openai'
import { searchPlaces } from '$services/foursquare'

export const execute: RequestHandler = async (req, res) => {
  const { message } = req.body

  try {
    const { output_text, status } = await findRestaurant(message)

    if (status === 'completed') {
      let results = []
      const query = JSON.parse(output_text)

      if (Object.keys(query).length) results = await searchPlaces(query)
       
      res.json({ results })
    } else {
      throw new Error(output_text)
    }
  } catch(err: any) {
    console.info(err.message)

    res.status(500).json({ code: 'API_ERROR', message: err.message })
  }
}
