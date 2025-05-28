import { openApiClient } from './client'

export const findRestaurant = async (prompt: string) => {
  return await openApiClient.responses.parse({
    model: 'gpt-4o-mini',
    store: true,
    input: [
      {
        role: 'system',
        content: 'You are a restaurant search prompt converter that would generate converted input as raw JSON object which has properties: query, near and open_now. If prompt is less than 10 characters, return nothing.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    text: {
      format: {
        type: "json_object",
      },
    },
  })
}
