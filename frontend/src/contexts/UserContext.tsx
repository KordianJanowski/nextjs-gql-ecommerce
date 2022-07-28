import React, { useContext, useState, createContext, Context } from "react";
import { Iuser, IuserContext } from "types/interfaces";

interface IProps {
  children: React.ReactNode
}

const defaultUser:Iuser = {
  username: 'Guest',
  jwtToken: '',
  isLogged: false
}

const UserContext: Context<IuserContext> = createContext({
  user: defaultUser,
  updateUser: (newUser:Iuser) => console.log(newUser)
})

export const useUserContext = () => {
  return useContext(UserContext)
}

export const UserContextProvider = ({ children }:IProps) => {
  const [user, setUser] = useState<Iuser>(defaultUser)

  const updateUser = (newUser: Iuser) => {
    setUser(newUser)
  }

  return (
    <UserContext.Provider value={{ updateUser, user }}>
      {children}
    </UserContext.Provider>
  )
}