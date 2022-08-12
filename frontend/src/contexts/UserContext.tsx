import React, { useContext, useState, createContext, Context, useEffect } from "react";
import { Iuser, IuserContext } from "types/interfaces";

interface IProps {
  children: React.ReactNode
}

const defaultUser:Iuser = {
  name: 'Guest',
  surname: '',
  jwtToken: '',
  isLogged: false
}


const UserContext: Context<IuserContext> = createContext({
  user: defaultUser,
  updateUser: (newUser:Iuser) => console.log(newUser),
  logout: () => { return }
})

export const useUserContext = () => {
  return useContext(UserContext)
}

export const UserContextProvider = ({ children }:IProps) => {
  const [user, setUser] = useState<Iuser>(defaultUser)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localStorageUser = localStorage.getItem('user')
      if(localStorageUser !== null) setUser(JSON.parse(localStorageUser))
    }
  }, []);

  const updateUser = (newUser: Iuser) => {
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(defaultUser)
    localStorage.removeItem('user')
  }

  return (
    <UserContext.Provider value={{ updateUser, user, logout }}>
      {children}
    </UserContext.Provider>
  )
}