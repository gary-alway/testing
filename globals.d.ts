declare type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }

declare type Beer = {
  id: number
  name: string
  image_url: string
  tagline: string
}

declare type User = {
  user_id: number
  name: string
}

declare namespace jest {
  interface Matchers<R> {
    toMatchUser(value: any): R
  }

  interface Expect {
    toMatchUser<T>(actual: T): Matchers<T>
  }
}
