import { IsingleProductForm } from "types/interfaces"
import * as Yup from 'yup';

const initialValues:IsingleProductForm = {
  color: '',
  size: ''
}

const validationSchema = Yup.object().shape({
  color: Yup.string().required('Required'),
  size: Yup.string().required('Required'),
});

const handleSubmit = (values:IsingleProductForm) => {
  console.log(values)
}

const useSingleProduct = () => {

  return {
    initialValues,
    handleSubmit,
    validationSchema
  }
}

export default useSingleProduct;