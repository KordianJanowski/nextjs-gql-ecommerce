import { Iproduct } from 'types/interfaces';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface Iprops {
  product: Iproduct
}

const ProductTile: React.FC<Iprops> = ({ product }) => {
  const { title, price, image, brand, slug } = product

  return (
    <div className="relative block">
      <div className="relative w-full overflow-hidden bg-gray-200 rounded-md shadow min-h-80 aspect-square arounded-md group-hover:opacity-90 lg:h-80 lg:aspect-none">
        <Image
          className="object-cover object-center lg:w-full lg:h-full"
          layout='fill'
          src={image}
          alt={title}
        />
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/product/${slug}`}>
              <div>
                <span aria-hidden="true" className="absolute inset-0 cursor-pointer" />
                {title}
              </div>
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{brand}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  )
}

export default ProductTile;