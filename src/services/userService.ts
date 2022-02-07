import { executeQuery } from '../database'

type UserService = {
  getUsers: () => Promise<User[]>
  saveUser: (name: string) => Promise<void>
}

export const userService = (): UserService => {
  const getUsers = (): Promise<User[]> => executeQuery<User>('select * from users')

  const saveUser = async (name: string): Promise<void> => {
    await executeQuery(`insert into users (name) values ("${name}")`)
  }

  return {
    getUsers,
    saveUser,
  }
}
