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
  color: string
}

export interface IsidebarLink {
  readableText: string
  slugText: string
}

export interface Iuser {
  name: string
  surname: string
  jwtToken: string
  isLogged: boolean
}

export interface IuserContext {
  user: Iuser
  updateUser: (newUser: Iuser) => void
  logout: () => void
}

export interface IsidebarLink {
  title: string
  emoji: string
  slug: string
}

export interface IsidebarLinkAttributes {
  attributes: IsidebarLink
}