import client from "api/apollo-client";
import { GET_CATEGORIES } from "api/queries";
import { Icategory, IcategorytAttributes } from "types/interfaces";

export const onlyFirstLetterUppercase = (text:string) => {
  return text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
}

export const getDefaultCategories = async () => {
  const { data } = await client.query({
    query: GET_CATEGORIES
  })

  const defaultCategories:Icategory[] = data.categories.data.map((element:IcategorytAttributes) => {
    return element.attributes
  })

  return defaultCategories
}