const useSearchInput = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    searchProducts()
  }

  const searchProducts = () => {
    console.log('searching for products')
  }

  return {
    handleSubmit,
    searchProducts,
  }
}

export default useSearchInput
