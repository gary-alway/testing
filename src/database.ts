import { createConnection } from 'mysql'

const client = createConnection({
  database: 'testing',
  host: 'localhost',
  password: 'secret',
  port: 33061,
  user: 'testing',
})

export const connect = () =>
  new Promise((resolve, reject) => {
    client.connect((error) => {
      if (error) reject(error)
      resolve(undefined)
    })
  })

export const endConnection = () =>
  new Promise((resolve, reject) => {
    client.end((error) => {
      if (error) reject(error)
      resolve(undefined)
    })
  })

export const executeQuery = <T>(sql: string, params = []): Promise<T[]> =>
  new Promise((resolve, reject) => {
    client.query(sql, params, (error, results) => {
      if (error) reject(error)
      if (Array.isArray(results)) {
        resolve((results as T[]).map((values: any) => ({ ...values })))
      } else {
        resolve([])
      }
    })
  })
