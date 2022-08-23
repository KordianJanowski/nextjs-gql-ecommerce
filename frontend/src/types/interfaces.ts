export interface IregisterFormValues {
  name: string
  surname: string
  email: string
  password: string
}

export interface IloginFormValues {
  email: string
  password: string
}

export interface IsingleProductForm {
  size: string
}

export interface Iuser {
  name: string
  surname: string
  jwtToken: string
  id: string
  isLogged: boolean
}

export interface IuserContext {
  user: Iuser
  updateUser: (newUser: Iuser) => void
  logout: () => void
  userFavoriteProducts: string[]
  toggleFavoriteProduct: (productID:string) => void
}

export interface Icategory {
  title: string
  emoji: string
  slug: string
  description?: string
}

export interface IcategorytAttributes {
  attributes: Icategory
}

export interface Iproduct {
  id: string
  title: string
  brand: string
  description: string
  price: number
  image: string
  slug: string
}

export interface IproductAttributes {
  id: string
  attributes: Iproduct
}

export interface IfavoriteProduct {
  attributes: { product: { data: IproductAttributes } }
}
