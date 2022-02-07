import { connect, endConnection } from '../src/database'
import { userService } from '../src/services/userService'

const service = userService()

describe('acceptance', () => {
  beforeAll(async () => {
    await connect()
  })

  afterAll(async () => {
    await endConnection()
  })

  it('users acceptance test', async () => {
    const name = `test user: ${Date.now()}`
    await service.saveUser(name)

    const users = await service.getUsers()

    expect(users.find((user) => user.name === name)).toMatchUser({ name })
  })
})
