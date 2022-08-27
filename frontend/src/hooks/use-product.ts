import { useQuery } from "@apollo/client";
import { Iproduct } from "types/interfaces";
import { GET_PRODUCT_BY_SLUG } from "api/queries";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Iprops {
  slug: string
}

const useProduct = ({ slug }:Iprops) => {
  const router = useRouter()
  const [product, setProduct] = useState<Iproduct>();

  const { data, loading, error } = useQuery(GET_PRODUCT_BY_SLUG, {
    variables: {
      slug
    }
  })

  useEffect(() => {
    if(!loading && !error) {
      if(data.products.data.length > 0) {

        const { id, attributes } = data.products.data[0]
        const dataProduct:Iproduct = {
          id,
          ...attributes
        }

        setProduct(dataProduct)
      }
      else router.push('/')
    }
  }, [loading, slug]);

  return {
    loading,
    product
  }
}

export default useProduct;