import { useQuery } from '@apollo/client';
import { useState, useEffect } from "react";
import { Iproduct, IproductAttributes } from 'types/interfaces';
import { GET_PRODUCTS_OF_CATEGORY } from 'api/queries';

interface IProps {
  slug: string
}

const useCategory = ({ slug }:IProps) => {
  const [products, setProducts] = useState<Iproduct[]>()

  const { data, loading } = useQuery(GET_PRODUCTS_OF_CATEGORY, {
    variables: {
      categorySlug: slug
    }
  })

  useEffect(() => {
    if(!loading) {
      const dataProducts:Iproduct[] = data.categories.data[0].attributes.products.data.map((product:IproductAttributes) => {
        return product.attributes
      })

      setProducts(dataProducts)
    }
  }, [loading, slug]);

  return {
    loading,
    products
  }
}

export default useCategory