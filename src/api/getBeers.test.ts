import nock, { cleanAll, isDone } from 'nock'
import { BEER_BASE_URL, getBeers } from './getBeers'

const testBeer = (overrides: Partial<Beer> = {}): Beer => ({
  id: Math.trunc(Math.random() * 20) + 1,
  name: 'beer',
  tagline: 'this beer....',
  image_url: 'http://url/beer1',
  ...overrides,
})

const beer1 = testBeer({ name: 'beer1' })
const beer2 = testBeer({ name: 'beer2' })
const beer3 = testBeer({ name: 'beer3' })
const beers = [beer1, beer2, beer3]

describe('get the beers', () => {
  beforeEach(cleanAll)

  it('returns the full list of beers', async () => {
    nock(BEER_BASE_URL).get('/beers').reply(200, beers)

    const result = await getBeers()

    expect(result).toEqual(beers)
    expect(isDone()).toBe(true)
  })

  it('returns a list of beers filtered by beer name', async () => {
    nock(BEER_BASE_URL).get('/beers?beer_name=lager').reply(200, beers)

    const result = await getBeers('lager')

    expect(result).toEqual(beers)
    expect(isDone()).toBe(true)
  })
})
