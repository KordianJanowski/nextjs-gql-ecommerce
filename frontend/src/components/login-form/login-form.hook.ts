import { useMutation } from '@apollo/client'
import { LOGIN } from 'api/mutations'
import { useUserContext } from 'contexts/UserContext'
import { IloginFormValues } from '../../types/interfaces'
import { useRouter } from 'next/router'
import * as Yup from 'yup';

const useLoginForm = () => {
  const router = useRouter()
  const [login] = useMutation(LOGIN)
  const { updateUser } = useUserContext()

  const formInitialValues = {
    email: '',
    password: '',
  }

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email'),
    password: Yup.string()
      .required('Password is required')
  });

  const handleSubmit = async (values: IloginFormValues) => {
    const { data } = await login({
      variables: {
        email: values.email,
        password: values.password,
      },
    })

    console.log(data.login)

    updateUser({
      name: data.login.user.username.trim().split(' ')[0],
      surname: data.login.user.username.trim().split(' ')[1],
      jwtToken: data.login.jwt,
      isLogged: true
    })

    router.push('/')
  }

  return {
    formInitialValues,
    handleSubmit,
    loginSchema
  }
}

export default useLoginForm
