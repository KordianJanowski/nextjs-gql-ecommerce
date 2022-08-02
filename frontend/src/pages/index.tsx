import type { NextPage } from 'next'
import { GET_MAIN_CATEGORIES } from "api/queries"
import client from 'api/apollo-client'
import { IsidebarLink, IsidebarLinkAttributes } from 'types/interfaces'
import { HorizontalTile, Layout, VerticalTile } from 'components'
import useHome from '../hooks/use-home'

interface IProps {
  defaultCategories: IsidebarLink[],
}

const Home: NextPage<IProps> = ({ defaultCategories }) => {
  const { products } = useHome()

  return (
    <Layout
      sidebarTitle='Explore'
      headerTitle='⚡ New In'
      links={defaultCategories}
    >
      {
        products.length > 0 ?
        <>
          <div className='flex h-auto flex-col xl:flex-row xl:h-96'>
            <div className='horizontal-tiles-box'>
              <HorizontalTile mainText={defaultCategories[1].title} subText={defaultCategories[1].description} emoji={defaultCategories[1].emoji} boxColor="bg-blue-200" />
              <HorizontalTile mainText={defaultCategories[2].title} subText={defaultCategories[2].description} emoji={defaultCategories[2].emoji} boxColor="bg-violet-200"/>
            </div>
            <div className='vertical-tiles-box'>
              <VerticalTile title={products[0].title} price={products[0].price} image={products[0].image} />
              <VerticalTile title={products[1].title} price={products[1].price} image={products[1].image} />
            </div>
          </div>
          <div className='flex h-auto flex-col xl:flex-row-reverse xl:h-96'>
            <div className='horizontal-tiles-box'>
              <HorizontalTile mainText={defaultCategories[3].title} subText={defaultCategories[3].description} emoji={defaultCategories[3].emoji} boxColor="bg-yellow-200" />
              <HorizontalTile mainText={defaultCategories[4].title} subText={defaultCategories[4].description} emoji={defaultCategories[4].emoji} boxColor="bg-rose-300"/>
            </div>
            <div className='vertical-tiles-box'>
              <VerticalTile title={products[2].title} price={products[2].price} image={products[2].image} />
              <VerticalTile title={products[3].title} price={products[3].price} image={products[3].image} />
            </div>
          </div>
          <div className='flex h-auto flex-col xl:flex-row xl:h-96'>
            <div className='horizontal-tiles-box'>
              <HorizontalTile mainText={defaultCategories[5].title} subText={defaultCategories[5].description} emoji={defaultCategories[5].emoji} boxColor="bg-green-200" />
              <HorizontalTile mainText={defaultCategories[6].title} subText={defaultCategories[6].description} emoji={defaultCategories[6].emoji} boxColor="bg-orange-200" />
            </div>
            <div className='vertical-tiles-box'>
              <VerticalTile title={products[4].title} price={products[4].price} image={products[4].image} />
              <VerticalTile title={products[5].title} price={products[5].price} image={products[5].image} />
            </div>
          </div>
        </>
        : null
      }
    </Layout>
  )
}

export default Home;

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GET_MAIN_CATEGORIES
  })

  const defaultCategories:IsidebarLink[] = data.categories.data.map((element:IsidebarLinkAttributes) => {
    return element.attributes
  })

  return {
    props: {
      defaultCategories,
    },
  }
}