import { useMutation } from '@apollo/client'
import { LOGIN } from 'api/mutations'
import { useUserContext } from 'contexts/UserContext'
import { IloginFormValues } from '../../types/interfaces'
import { useRouter } from 'next/router'

const useLoginForm = () => {
  const router = useRouter()
  const formInitialValues = {
    email: '',
    password: '',
  }

  const [login] = useMutation(LOGIN)

  const { updateUser } = useUserContext()

  const handleSubmit = async (values: IloginFormValues) => {
    const { data } = await login({
      variables: {
        email: values.email,
        password: values.password,
      },
    })

    updateUser({
      username: data.login.user.username,
      jwtToken: data.login.jwt,
      isLogged: true,
    })
    router.push('/')
  }

  return {
    formInitialValues,
    handleSubmit,
  }
}

export default useLoginForm
