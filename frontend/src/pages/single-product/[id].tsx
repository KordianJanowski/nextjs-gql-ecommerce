import type { NextPage } from "next";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { StarIcon } from '@heroicons/react/outline'
import SingleProductForm from "./../../components/single-product-form";

const SingleProduct: NextPage = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = router.query;

  return (
    <section className="overflow-hidden text-gray-600 body-font">
      <div className="container pb-24 mx-auto lg:pt-16 xl:pt-24">
        <div className="relative flex flex-wrap mx-auto lg:w-full">
          <div className='relative w-full h-64 lg:w-1/2 lg:h-auto'>
            <Image
              alt="ecommerce"
              className="object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
              layout='fill'
            />
          </div>
          <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
            <h2 className="text-sm tracking-widest text-gray-500 title-font">BRAND NAME</h2>
            <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">The Catcher in the Rye</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <StarIcon className='w-4 h-4 text-indigo-500 fill-indigo-500'  />
                <StarIcon className='w-4 h-4 text-indigo-500 fill-indigo-500' />
                <StarIcon className='w-4 h-4 text-indigo-500 fill-indigo-500' />
                <StarIcon  className='w-4 h-4 text-indigo-500'/>
                <StarIcon className='w-4 h-4 text-indigo-500' />
                <span className="ml-3 text-gray-600">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
            <SingleProductForm />
          </div>
        </div>
      </div>
    </section>
  )
}



export default SingleProduct;