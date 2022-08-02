import { useQuery } from '@apollo/client'
import { Iproduct, IproductAttributes } from 'types/interfaces'
import { GET_SIX_RANDOM_PRODUCTS } from 'api/queries'

const useHome = () => {
  const { data } = useQuery(GET_SIX_RANDOM_PRODUCTS)

  let products:Iproduct[] = []

  if(data) {
    products = data.products.data.map((product:IproductAttributes) => {
      return product.attributes
    })
  }

  return {
    products
  }
}

export default useHome