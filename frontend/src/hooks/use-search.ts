import { useQuery } from '@apollo/client';
import { useState, useEffect } from "react";
import { Iproduct, IproductAttributes } from 'types/interfaces';
import { GET_PRODUCTS_BY_TITLE } from 'api/queries';

interface Iprops {
  queryPhrase: string
}

const useSearch = ({ queryPhrase }:Iprops) => {
  const [products, setProducts] = useState<Iproduct[]>()

  const { data, loading } = useQuery(GET_PRODUCTS_BY_TITLE, {
    variables: {
      productTitle: `%${queryPhrase}`
    }
  })

  useEffect(() => {
    if(!loading) {
      const dataProducts:Iproduct[] = data.products.data.map((product:IproductAttributes) => {
        return product.attributes
      })


      setProducts(dataProducts)
    }
  }, [loading, queryPhrase]);

  return {
    loading,
    products
  }
}

export default useSearch;