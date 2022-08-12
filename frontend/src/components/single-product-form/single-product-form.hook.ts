import { IsingleProductForm } from 'types/interfaces'
import * as Yup from 'yup'

const initialValues: IsingleProductForm = {
  size: '',
}

const validationSchema = Yup.object().shape({
  size: Yup.string().required('Required'),
})

const handleSubmit = (values: IsingleProductForm) => {
  console.log(values)
}

const useSingleProductForm = () => {
  return {
    initialValues,
    handleSubmit,
    validationSchema,
  }
}

export default useSingleProductForm
