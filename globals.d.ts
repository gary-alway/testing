declare type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }

declare type Beer = {
  id: number
  name: string
  image_url: string
  tagline: string
}
