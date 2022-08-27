import type { NextPage } from 'next';
import { Icategory } from 'types/interfaces';
import { getDefaultCategoriesLinks } from 'utils';
import { Layout, ProductTile } from 'components';
import useSearch from '@hooks/use-search';
import { useRouter } from 'next/router';

interface Iprops {
  defaultCategoriesLinks: Icategory[]
}

const Search: NextPage<Iprops> = ({ defaultCategoriesLinks }) => {
  const router = useRouter()
  const { phrase } = router.query
  const { products, loading } = useSearch({ queryPhrase: phrase ? String(phrase) : '' })

  const productMap = products?.map(product => {
    return (
      <ProductTile key={product.slug} product={product} />
    )
  })

  return (
    <Layout
      links={defaultCategoriesLinks}
      headerTitle="Search"
    >
      <div>
        {
          loading ?
            "Loading"
          :
          <div className="bg-white">
            <div className="max-w-2xl mx-auto lg:max-w-7xl">
              <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                { productMap }
              </div>
            </div>
          </div>
        }
      </div>
    </Layout>
  )
}

export default Search;

export const getStaticProps = async () => {
  const defaultCategoriesLinks = await getDefaultCategoriesLinks()

  return {
    props: {
      defaultCategoriesLinks,
    },
  }
}