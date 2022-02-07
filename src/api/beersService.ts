import request from 'superagent'

export const BASE_URL = 'https://api.punkapi.com/v2'

export const getBeers = async (name?: string): Promise<Beer[]> => {
  const url = name ? `${BASE_URL}/beers?beer_name=${name}` : `${BASE_URL}/beers`
  return request.get(url).then(({ body }) => body as Beer[])
}

export const putBeer = async (beer: Beer): Promise<void> => {
  const url = `${BASE_URL}/beers`
  await request.put(url).send({ data: beer })
}
