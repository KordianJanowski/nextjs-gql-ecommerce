import React from 'react'
import { ChevronDownIcon, HeartIcon } from '@heroicons/react/outline'
import useSingleProduct from './single-product-form.hook'
import { Formik, Field, Form } from 'formik'
import { IsingleProductForm } from 'types/interfaces'

const SingleProductForm: React.FC = () => {
  const { initialValues, validationSchema, handleSubmit } = useSingleProduct()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: IsingleProductForm) => handleSubmit(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
            <div className="flex">
              <span className="mr-3">Color</span>
              <div className="relative w-6 h-6">
                <Field
                  checked
                  type="radio"
                  name="color"
                  value="white"
                  className="absolute z-40 w-6 h-6 opacity-0 cursor-pointer peer"
                />
                <span className="absolute w-full h-full bg-white border-2 border-gray-300 rounded-full peer-checked:border-gray-700"></span>
              </div>
              <div className="relative w-6 h-6 mx-1">
                <Field
                  type="radio"
                  name="color"
                  value="gray"
                  className="absolute z-40 w-6 h-6 opacity-0 cursor-pointer peer"
                />
                <span className="absolute w-full h-full border-2 border-gray-300 rounded-full bg-slate-700 peer-checked:border-gray-700"></span>
              </div>
              <div className="relative w-6 h-6">
                <Field
                  type="radio"
                  name="color"
                  value="indigo"
                  className="absolute z-40 w-6 h-6 opacity-0 cursor-pointer peer"
                />
                <span className="absolute w-full h-full bg-indigo-500 border-2 border-gray-300 rounded-full peer-checked:border-gray-700"></span>
              </div>
            </div>
            <div className="flex items-center ml-6">
              <span className="mr-3">Size</span>
              <div className="relative">
                <Field
                  as="select"
                  name="size"
                  className={`py-2 pl-3 pr-10 text-base border ${
                    errors.size && touched.size
                      ? 'border-red-400 border-2'
                      : 'border-gray-300'
                  } rounded appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500`}
                >
                  <option disabled hidden value="">
                    -
                  </option>
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </Field>
                <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <span className="text-2xl font-medium text-gray-900 title-font">
              $58.00
            </span>
            <button
              type="submit"
              className="flex px-6 py-2 ml-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
            >
              Add to cart
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full"
            >
              <HeartIcon className="w-6 h-6 fill-gray-500" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SingleProductForm
