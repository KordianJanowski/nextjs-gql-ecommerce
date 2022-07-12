import React from 'react'
import useSearchInput from './search-input-hook'

const SearchInput: React.FC = () => {
  const { handleSubmit } = useSearchInput()

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row items-center justify-center w-full p-1 border-2 rounded-lg lg:p-0 lg:border-0 lg:w-1/3"
    >
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-400 sm:w-6 sm:h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.7}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Search for products"
        className="w-full p-1 mx-1 text-sm font-normal lg:border-b sm:text-base focus:outline-none lg:focus:border-b-2 focus:border-gray-300"
      />
    </form>
  )
}

export default SearchInput
