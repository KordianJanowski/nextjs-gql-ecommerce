import { useState, useEffect, Context, createContext, useReducer } from 'react'
import { useRouter } from 'next/router'
import { IfavoriteProduct, IproductAttributes, Iuser, IuserContext } from "types/interfaces";
import client from 'api/apollo-client';
import { useMutation, useQuery } from '@apollo/client'
import { ADD_FAVORITE_PRODUCT, REMOVE_FAVORITE_PRODUCT } from 'api/mutations'
import { GET_USER_FAVORITE_PRODUCTS_IDS, GET_USER_FAVORITE_PRODUCT_ID } from "api/queries";

// Context utils
const defaultFavoriteProducts:string[] = []
const defaultUser:Iuser = {
  name: 'Guest',
  surname: '',
  jwtToken: '',
  id: '',
  isLogged: false
}

export const UserContext: Context<IuserContext> = createContext({
  user: defaultUser,
  updateUser: (newUser:Iuser) => console.log(newUser),
  logout: () => { return },
  userFavoriteProducts: defaultFavoriteProducts,
  toggleFavoriteProduct: (productID) => console.log(productID)
})

// useReducer utils
interface State {
  favProductsIds: string[]
}

interface Action {
  type: string
  favoriteProductID: string
}

const initFavProductsState:State = {
  favProductsIds: []
}

const favoriteProductsReducer = (state: State, action:Action) => {
  const { type, favoriteProductID } = action;

  switch (type) {
    case 'ADD':
    return {
        ...state,
        favProductsIds: [
          ...state.favProductsIds,
          favoriteProductID
        ]
      }
    case 'REMOVE':
      return {
        ...state,
        favProductsIds: state.favProductsIds.filter(id => id !== favoriteProductID)
      }
    default:
      return state;
  }
}

export const useUserContextData = () => {
  const router = useRouter()
  const [user, setUser] = useState<Iuser>(defaultUser)
  const [addFavoriteProduct] = useMutation(ADD_FAVORITE_PRODUCT)
  const [removeFavoriteProduct] = useMutation(REMOVE_FAVORITE_PRODUCT)
  const [userFavProductsState, userFavoriteProductsDispatch] = useReducer(favoriteProductsReducer, initFavProductsState)

  const { data } = useQuery(GET_USER_FAVORITE_PRODUCTS_IDS, {
    variables: {
      userID: user.id
    },
    context: {
      headers: {
        "Authorization": `Bearer ${user.jwtToken}`
      }
    }
  })
  if(data && initFavProductsState.favProductsIds.length === 0) {
    data.favoriteProducts.data.map((favoriteProduct:IfavoriteProduct) => {
      const { id } = favoriteProduct.attributes.product.data
      initFavProductsState.favProductsIds.push(id)
    })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localStorageUser = localStorage.getItem('user')
      if(localStorageUser !== null) {
        setUser(JSON.parse(localStorageUser))
      }
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

  const toggleFavoriteProduct = async (productID:string) => {
    if(!user.isLogged) {
      router.push('/login')
      return
    }

    if(!userFavProductsState.favProductsIds.includes(productID)) {
      userFavoriteProductsDispatch({ type: 'ADD', favoriteProductID: productID })

      const formattedPublishedAtDate = (new Date()).toISOString();

      await addFavoriteProduct({
        variables: {
          productID,
          userID: user.id,
          publishedAt: formattedPublishedAtDate
        },
        context: {
          headers: {
            "Authorization": `Bearer ${user.jwtToken}`
          }
        }
      }).catch(() => {
          // as a result of an error, deleting a newly favored product
          userFavoriteProductsDispatch({ type: 'REMOVE', favoriteProductID: productID })
        })
    } else {
      userFavoriteProductsDispatch({ type: 'REMOVE', favoriteProductID: productID })

      await client.query({
        query: GET_USER_FAVORITE_PRODUCT_ID,
        fetchPolicy: 'no-cache',
        variables: {
          productID,
          userID: user.id,
        },
        context: {
          headers: {
            "Authorization": `Bearer ${user.jwtToken}`
          }
        },
      }).then(({ data }) => {
          data.favoriteProducts.data.forEach((favoriteProduct:IproductAttributes) => {
            if(!favoriteProduct.id) return

            removeFavoriteProduct({
              variables: {
                favoriteProductID: favoriteProduct.id,
              },
              context: {
                headers: {
                  "Authorization": `Bearer ${user.jwtToken}`
                }
              }
            })
          })
        })
        .catch(() => {
          // as a result of an error, restore favorite product
          userFavoriteProductsDispatch({ type: 'ADD', favoriteProductID: productID })
        })
    }
  }


  return {
    user,
    setUser,
    addFavoriteProduct,
    updateUser,
    logout,
    userFavoriteProducts: userFavProductsState.favProductsIds,
    toggleFavoriteProduct
  }
}