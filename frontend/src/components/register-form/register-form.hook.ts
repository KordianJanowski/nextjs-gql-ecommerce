import { useMutation } from '@apollo/client'
import { REGISTER } from '../../api/mutations'
import { IregisterFormValues } from '../../types/interfaces'

const useRegisterForm = () => {
  const formInitialValues = {
    name: '',
    surname: '',
    email: '',
    password: '',
  }

  const [register] = useMutation(REGISTER)

  const handleSubmit = async (values: IregisterFormValues) => {
    const username = `${values.name} ${values.surname}`

    await register({
      variables: {
        username,
        email: values.email,
        password: values.password,
      },
    })
  }

  return {
    formInitialValues,
    handleSubmit,
  }
}

export default useRegisterForm
