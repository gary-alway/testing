import { connect, endConnection } from '../src/database'
import { userService } from '../src/services/userService'
import { testUser } from './testFactories'

const service = userService()

describe('acceptance', () => {
  beforeAll(async () => {
    await connect()
  })

  afterAll(async () => {
    await endConnection()
  })

  it('users acceptance test', async () => {
    const user = testUser({ name: `test user: ${Date.now()}` })
    await service.saveUser(user.name)

    const users = await service.getUsers()

    expect(users.find((u) => u.name === user.name)).toMatchUser(user)
  })
})
