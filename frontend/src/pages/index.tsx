import type { NextPage } from 'next'
import Layout from '@components/layout/layout'
import { GET_MAIN_CATEGORIES } from "api/queries"
import client from 'api/apollo-client'
import { IsidebarLink, IsidebarLinkAttributes } from 'types/interfaces'

interface IProps {
  defaultCategories: IsidebarLink[]
}

const Home: NextPage<IProps> = ({ defaultCategories }) => {
  return (
    <Layout
      sidebarTitle='Explore'
      headerTitle='⚡ New In'
      links={defaultCategories}
    >
      MainPage
    </Layout>
  )
}

export default Home;

export const getStaticProps = async () => {
  let { data } = await client.query({
    query: GET_MAIN_CATEGORIES
  })

  data = data.categories.data

  const defaultCategories:IsidebarLink[] = data.map((element:IsidebarLinkAttributes) => {
    return element.attributes
  })

  return {
    props: {
      defaultCategories,
    },
  }
}
