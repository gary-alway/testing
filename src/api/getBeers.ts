import request from 'superagent'

export const BEER_BASE_URL = 'https://api.punkapi.com/v2'

export const getBeers = async (name?: string): Promise<Beer[]> => {
  const url = name ? `${BEER_BASE_URL}/beers?beer_name=${name}` : `${BEER_BASE_URL}/beers`
  return request.get(url).then(({ body }) => body as Beer[])
}
