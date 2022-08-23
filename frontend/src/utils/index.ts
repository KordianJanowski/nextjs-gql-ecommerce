import client from "api/apollo-client";
import { GET_CATEGORIES } from "api/queries";
import { Icategory, IcategorytAttributes } from "types/interfaces";

export const onlyFirstLetterUppercase = (text:string) => {
  return text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
}

export const getdefaultCategoriesLinks = async () => {
  const { data } = await client.query({
    query: GET_CATEGORIES
  })

  const defaultCategoriesLinks:Icategory[] = data.categories.data.map((element:IcategorytAttributes) => {
    return element.attributes
  })

  return defaultCategoriesLinks
}