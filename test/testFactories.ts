export const testBeer = (overrides: Partial<Beer> = {}): Beer => ({
  id: Math.trunc(Math.random() * 20) + 1,
  name: 'beer',
  tagline: 'this beer....',
  image_url: 'http://url/beer1',
  ...overrides,
})

export const testUser = (overrides: Partial<User> = {}): User => ({
  user_id: Math.trunc(Math.random() * 20) + 1,
  name: 'testing',
  ...overrides,
})
