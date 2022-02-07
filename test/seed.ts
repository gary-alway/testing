import { connect, endConnection, executeQuery } from '../src/database'

const seed = async () => {
  await executeQuery(`insert into users (name) values ('test 1'), ('test 2'), ('test 3')`)
  const users = await executeQuery<User>(`select * from users`)
  console.log(users)
}

connect().then(() =>
  seed()
    .then(() => {
      console.log('finished')
      process.exit(0)
    })
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
    .finally(() => endConnection()),
)
