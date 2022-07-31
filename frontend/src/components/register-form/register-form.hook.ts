import { useMutation } from '@apollo/client'
import { REGISTER } from 'api/mutations'
import { IregisterFormValues } from 'types/interfaces'
import { useUserContext } from 'contexts/UserContext'
import { useRouter } from 'next/router'
import { onlyFirstLetterUppercase } from '../../utils/index'
import * as Yup from 'yup';

const useRegisterForm = () => {
  const router = useRouter()
  const { updateUser } = useUserContext()
  const [register] = useMutation(REGISTER)

  const formInitialValues = {
    name: '',
    surname: '',
    email: '',
    password: '',
  }

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name is too short')
      .max(20, 'Name is too long')
      .required('Name is required'),
    surname: Yup.string()
      .min(2, 'Surname is too short')
      .max(30, 'Surname is too long')
      .required('Surname is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .min(5, 'Password is too short')
      .max(30, 'Password is too long')
      .required('Password is required')
  });

  const handleSubmit = async (values: IregisterFormValues) => {
    const username = `${onlyFirstLetterUppercase(values.name)} ${onlyFirstLetterUppercase(values.surname)}`

    const { data } = await register({
      variables: {
        username,
        email: values.email,
        password: values.password,
      },
    })

    updateUser({
      name: data.register.user.username.trim().split(' ')[0],
      surname: data.register.user.username.trim().split(' ')[1],
      jwtToken: data.register.jwt,
      isLogged: true
    })

    router.push('/')
  }

  return {
    formInitialValues,
    handleSubmit,
    registerSchema
  }
}

export default useRegisterForm;