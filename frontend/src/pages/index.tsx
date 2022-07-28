import type { NextPage } from 'next'
import Layout from '@components/layout/layout'

const Home: NextPage = () => {
  return (
    <Layout
      sidebarTitle='Explore'
      headerTitle='⚡ New In'
      links={[
        '⚡ New In',
        '👚 Clothing',
        '👠 Shoes',
        '👜 Accessories',
        '🤸 Activewear',
        '🎁 Gifts & Living'
      ]}
    >
      MainPage
    </Layout>
  )
}

export default Home
