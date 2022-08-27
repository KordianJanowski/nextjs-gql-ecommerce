import type { NextPage } from 'next'
import { Icategory } from 'types/interfaces'
import { HorizontalTile, VerticalTile, Layout } from 'components'
import useHome from '../hooks/use-home'
import { getDefaultCategoriesLinks } from 'utils'

interface Iprops {
  defaultCategoriesLinks: Icategory[],
}

const Home: NextPage<Iprops> = ({ defaultCategoriesLinks }) => {
  const { products } = useHome()

  return (
    <Layout
      headerTitle={`${defaultCategoriesLinks[0].emoji} ${defaultCategoriesLinks[0].title}`}
      links={defaultCategoriesLinks}
    >
      {
        products.length > 0 ?
        <>
          <div className='flex flex-col h-auto xl:flex-row xl:h-96'>
            <div className='horizontal-tiles-box'>
              <HorizontalTile category={defaultCategoriesLinks[1]} boxColor="bg-blue-200" />
              <HorizontalTile category={defaultCategoriesLinks[2]} boxColor="bg-violet-200"/>
            </div>
            <div className='vertical-tiles-box'>
              <VerticalTile product={products[0]} />
              <VerticalTile product={products[1]} />
            </div>
          </div>
          <div className='flex flex-col h-auto xl:flex-row-reverse xl:h-96'>
            <div className='horizontal-tiles-box'>
              <HorizontalTile category={defaultCategoriesLinks[3]} boxColor="bg-yellow-200" />
              <HorizontalTile category={defaultCategoriesLinks[4]} boxColor="bg-rose-300"/>
            </div>
            <div className='vertical-tiles-box'>
              <VerticalTile product={products[2]} />
              <VerticalTile product={products[3]} />
            </div>
          </div>
          <div className='flex flex-col h-auto xl:flex-row xl:h-96'>
            <div className='horizontal-tiles-box'>
              <HorizontalTile category={defaultCategoriesLinks[5]} boxColor="bg-green-200" />
              <HorizontalTile category={defaultCategoriesLinks[6]} boxColor="bg-orange-200" />
            </div>
            <div className='vertical-tiles-box'>
              <VerticalTile product={products[4]} />
              <VerticalTile product={products[5]} />
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
  const defaultCategoriesLinks = await getDefaultCategoriesLinks()

  return {
    props: {
      defaultCategoriesLinks,
    },
  }
}